import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import validateInput from '../hoc/validateInput';
import Icon from '../icon';

class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    onChange (e) {
        const props = this.props;
        if ('onChange' in props) {
            props.onChange(e.target.value);
        }
    }

    onFocus () {
        const props = this.props;
        if ('onFocus' in props) {
            props.onFocus();
        }
    }

    render () {
        const props = this.props;
        const prefixCls = 'cooInput';
        const inputWrapperClassName = className({
            [`${prefixCls}-wrap`]: true
        });
        const inputClassName = className({
            [prefixCls]: true,
            [`${prefixCls}--${props.size}`]: true,
            [`${prefixCls}--readonly`]: props.readonly,
            [`${prefixCls}--error`]: props.error
        });

        let opts = {
            placeholder: props.placeholder
        };

        if (props.value !== null) {
            opts.value = props.value;
        } else {
            opts.defaultValue = props.defaultValue;
        }


        let optsWrapper = {};

        if (props.width !== null) {
            optsWrapper.style = {
                width: typeof props.width === 'number' ? `${props.width}px` : props.width
            };
        }


        return (
            <div className={inputWrapperClassName} {...optsWrapper}>
                <input className={inputClassName}
                       { ...opts }
                       ref={props.inputRef}
                       readOnly={props.readonly}
                       onChange={this.onChange.bind(this)}
                       onFocus={this.onFocus.bind(this)} />
                {
                    props.showClear ? (
                        <a href="javascript:;" className={className(`${prefixCls}-icon`)}>
                            <Icon type='circle-close' />
                        </a>
                    ) : null
                }
            </div>
        );
    }
}

Input.defaultProps = {
    size: 'default',
    readonly: false,
    showClear: false,
    defaultValue: null,
    value: null,
    width: null,
};

Input.propTypes = {
    size: propTypes.oneOf(['small', 'default', 'large']),
    disabled: propTypes.bool,
    placeholder: propTypes.string,
    showClear: propTypes.bool,
    readonly: propTypes.bool,
    width: propTypes.oneOfType([propTypes.number, propTypes.string]),
    value: propTypes.string,
    defaultValue: propTypes.string
};

export default validateInput(Input);
