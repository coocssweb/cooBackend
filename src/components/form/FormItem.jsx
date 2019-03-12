import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        const props = this.props;
        return (
            <div className={className('cooFormItem')}>
                {
                    props.label ? (
                        <div className={className('cooFormLabel')}>{ props.label }</div>
                    ) : null
                }
                <div className={className('cooFormField')}>
                {
                    this.props.children
                }
                </div>
            </div>
        );
    }
}

FormItem.defaultProps = {

};

FormItem.propTypes = {
    label: propTypes.string
};

export default FormItem;
