import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="">
                <div className={className('test')}>Tessssst</div>
            </div>
        );
    }
}

export default Index;
