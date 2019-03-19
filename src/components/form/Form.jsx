import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import RegisterContext from './registerContext';
import Button from '../button';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
        this._register = this._register.bind(this);
        this.state = {
            components: []
        };
    }

    componentDidMount () {

    }

    // 子组件注册到components,
    // 用于组件的批量提交
    _register (component) {
        this.state.components.push(component);
    }

    onSave () {
        const props = this.props;
        let flag = this.validateAll();
        if (!flag) {
            return false;
        }
        if ('onSave' in props) {
            props.onSave();
        }
    }

    // 重置状态
    reset () {
        this.state.components.map((component) => {
            return component.onReset();
        });
    }

    validateAll () {
        const result = this.state.components.map((component) => {
            return component.onValidate();
        });

        return result.reduce((prev, current) => {
            return prev && current
        });
    }

    render () {
        const props = this.props;
        const prefixCls = 'cooForm';
        const formClassName = className({
            [prefixCls]: true,
            [`${prefixCls}--${props.direction}`]: true
        });
        return (
            <div className={formClassName}>
                {
                    props.title ? (
                        <div className={className('cooForm-title')}>{ props.title }</div>
                    ) : null
                }
                <div className={className('cooForm-content')}>
                    <RegisterContext.Provider value={this._register}>
                        {this.props.children}
                    </RegisterContext.Provider>
                </div>
                <div className={className('cooForm-footer')}>
                    <Button loading={props.submitting} fill type="primary" size="large" onClick={this.onSave}>保存</Button>
                </div>
            </div>
        );
    }
}

Form.defaultProps = {
    direction: 'vertical',
    title: null,
    submitting: false
};

Form.propTypes = {
    direction: propTypes.string,
    title: propTypes.string,
    submitting: propTypes.bool
};

export default Form;
