/**
 * 输入类高阶组件
 * Created by coocss on 2019/3/18.
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

export default (WrappedComponent) => {
    class inputControl extends Component {
        constructor (props) {
            super(props);
            this.onValidate = this.onValidate.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.inputRef = React.createRef();
            this.state = {
                error: false,
                errorTip: ''
            };
        }
        componentDidMount () {
            // console.log(this.props.register);
            // 注册组件
            this.props._register && this.props._register(this);
        }
        onValidate () {
            const { validations } = this.props;
            const value = this.inputRef.current.value;
            for (let validation of validations) {
                let tip = validation(value);
                if (tip) {
                    this.setState({
                        error: true,
                        errorTip: tip
                    });
                    break;
                }
            }
        }

        handleChange (value) {
            this.setState({
                error: false,
                errorTip: ''
            });
            const props = this.props;
            if ('onChange' in props) {
                props.onChange(value);
            }
        }

        render () {
            return (
                <div className={classNames('cooField')}>
                    <WrappedComponent
                        {...this.props}
                        inputRef={this.inputRef}
                        error={this.state.error}
                        onChange={this.handleChange} />
                    <div className={classNames({ 'cooField-tip': true, 'cooField-tip--show': this.state.error })}>
                        { this.state.errorTip }
                    </div>
                </div>
            );
        }
    }

    inputControl.displayName = `ValidateInput(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    inputControl.defaultProps = {
        validations: []
    };
    inputControl.propTypes = {
        validations: propTypes.array
    };

    return inputControl;
};
