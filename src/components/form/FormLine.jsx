import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

class FormLine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className={className('cooFormLine')}>
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default FormLine;
