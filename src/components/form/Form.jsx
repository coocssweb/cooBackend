import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Button from '../button';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
        this.state = {};
    }

    onSave () {
        const props = this.props;
        if ('onSave' in props) {
            props.onSave();
        }
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
                    {this.props.children}
                </div>
                <div className={className('cooForm-footer')}>
                    <Button fill type="primary" size="large" onClick={this.onSave}>保存</Button>
                </div>
            </div>
        );
    }
}

Form.defaultProps = {
    direction: 'vertical',
    title: null
};

Form.propTypes = {
    direction: propTypes.string,
    title: propTypes.string
};

export default Form;
