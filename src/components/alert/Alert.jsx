import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Icon from '../icon';

class Alert extends Component {
    constructor (props) {
        super(props);
        this.state = {
            closed: false
        }
    }

    onClose () {
        const props = this.props;
        this.setState({
            closed: true
        });
        if ('onClose' in props) {
            props.onClose();
        }
    }

    render () {
        const { props, state} = this;
        const alertClassName = className({
            'cooAlert': true,
            [`cooAlert--${props.type}`]: true
        });

        return closed ? null : (
            <div className={alertClassName}>
                { props.children }
                {
                    props.closable ?
                        (<a href="javascript:;"
                            className={className('cooAlert-close')}
                            onClick={this.onClose.bind(this)}><Icon type="close" /></a>)
                        : null
                }
            </div>
        );
    }
}

Alert.defaultProps = {
    closable: true,
    type: 'primary'
};

Alert.propTypes ={
    type: propTypes.oneOf(['primary', 'success', 'normal', 'danger', 'white']),
    closable: propTypes.bool
};

export default Alert;
