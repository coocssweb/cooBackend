import React, {Component} from 'react';
import className from 'classnames';
import propTypes from 'prop-types';

class Loading extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        let style = {};
        if (this.props.color) {
            style = {
                backgroundColor: this.props.color
            };
        }
        return (
            <div className={className({ 'cooLoading': true, [`cooLoading--${this.props.size}`]: true })}>
                <span className={className('cooLoading-item cooLoading-item--1')} style={style}></span>
                <span className={className('cooLoading-item cooLoading-item--2')} style={style}></span>
                <span className={className('cooLoading-item cooLoading-item--3')} style={style}></span>
            </div>
        );
    }
}

Loading.defaultProps = {
    size: 'default',
    type: 'primary',
    color: ''
};

Loading.propTypes = {
    size: propTypes.oneOf(['small', 'default', 'large']),
    color: propTypes.string
};

export default Loading;

