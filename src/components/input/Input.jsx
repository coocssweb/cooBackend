import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Icon } from '../icon';

class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    onChange () {
        const props = this.props;
        if ('onChange' in props) {
            props.onChange();
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
            [`${prefixCls}--readonly`]: props.readonly
        });

        let opts = {
            placeholder: props.placeholder
        };

        if (props.value !== null) {
            opts.value = props.value;
        }

        if (props.width !== null) {
            opts.width = `${props.width}px`;
        }

        return (
            <div className={inputWrapperClassName}>
                <input className={inputClassName}
                       { ...opts }
                       defaultValue={props.defaultValue} readOnly={props.readonly} />
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
    width: propTypes.number
};

export default Input;
