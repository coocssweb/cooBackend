import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Icon from '../icon';

class Alert extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const props = this.props;
        return (
            <div className={className({'cooAlert': true, [`cooAlert-${props.type}`]: true})}>
                { props.children }
                    
            </div>
        );
    }
}

Alert.defaultProps = {
    closable: true,
    duration: 2000,
};

Alert.propTypes ={
    type: propTypes.oneOf(['primary', 'success', 'normal', 'danger', 'white']),
    closable: propTypes.bool,
    duration: propTypes.number
};

export default Alert;
