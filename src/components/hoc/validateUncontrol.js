/**
 * 输入类高阶组件
 * Created by coocss on 2019/3/18.
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

export default (WrappedComponent) => {
    class InputControl extends Component {
        constructor (props) {
            super(props);
            this.onValidate = this.onValidate.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                error: false,
                errorTip: ''
            };
        }
        componentDidMount () {
            // 注册组件
            this.props._register && this.props._register(this);
        }

        // 重置状态
        onReset () {
            this.setState({
                error: false,
                errorTip: ''
            });
        }

        onValidate () {
            const { validations } = this.props;
            const value = this.inputRef.state.value;
            let flag = true;
            for (let validation of validations) {
                let tip = validation(value);
                if (tip) {
                    this.setState({
                        error: true,
                        errorTip: tip
                    });
                    flag = false;
                    break;
                }
            }

            return flag;
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
                        ref={ref => { this.inputRef = ref; }}
                        error={this.state.error}
                        onChange={this.handleChange} />
                    <div className={classNames({ 'cooField-tip': true, 'cooField-tip--show': this.state.error })}>
                        { this.state.errorTip }
                    </div>
                </div>
            );
        }
    }

    InputControl.displayName = `ValidateInput(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    InputControl.defaultProps = {
        validations: []
    };
    InputControl.propTypes = {
        validations: propTypes.array
    };

    return InputControl;
};
