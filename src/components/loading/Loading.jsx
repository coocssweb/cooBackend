import React, {Component} from 'react';
import className from 'classnames';
import propTypes from 'prop-types';

class Loading extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className={className({ 'cooLoading': true, [`cooLoading--${this.props.size}`]: true })}>
                <span className={className('cooLoading-item cooLoading-item--1')}></span>
                <span className={className('cooLoading-item cooLoading-item--2')}></span>
                <span className={className('cooLoading-item cooLoading-item--3')}></span>
            </div>
        );
    }
}

Loading.defaultProps = {
    size: 'default'
};

Loading.propTypes = {
    size: propTypes.oneOf(['small', 'default', 'large']),
};

export default Loading;

