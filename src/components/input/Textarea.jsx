import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Icon } from '../icon';

class Textarea extends Component {
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
        const prefixCls = 'cooTextArea';
        const inputWrapperClassName = className({
            [`${prefixCls}-wrap`]: true
        });
        const inputClassName = className({
            [prefixCls]: true,
            [`${prefixCls}--${props.size}`]: true,
            [`${prefixCls}--readonly`]: props.readonly
        });

        let opts = {
            placeholder: props.placeholder,
            defaultValue: props.defaultValue,
            readOnly: props.readonly,
            rows: props.rows

        };
        if (props.value !== null) {
            opts.value = props.value;
        }
        if (props.width !== null) {
            opts.width = `${props.width}px`;
        }

        return (
            <div className={inputWrapperClassName}>
                <textarea className={inputClassName} {...opts} />
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

Textarea.defaultProps = {
    size: 'default',
    readonly: false,
    showClear: false,
    defaultValue: null,
    value: null,
    rows: 3
};

Textarea.propTypes = {
    size: propTypes.oneOf(['small', 'default', 'large']),
    disabled: propTypes.bool,
    placeholder: propTypes.string,
    showClear: propTypes.bool,
    readonly: propTypes.bool,
    rows: propTypes.number
};

export default Textarea;