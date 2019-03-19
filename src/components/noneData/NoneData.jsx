import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Button from '../button';
import Loading from '../loading';
class NoneData extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick () {
        const props = this.props;
        if ('onClick' in props) {
            props.onClick();
        }
    }

    render() {
        const props = this.props;
        const renderLoading = () => {
            return <Loading />
        };

        const renderContent = () => {
            return (
                <div className={className('cooNoneData-content')}>
                    <div className={className('cooNoneData-description')}>
                        {this.props.children}
                    </div>
                    {
                        props.buttonName ? (
                            <div className={className('cooNoneData-toolbar')}>
                                <Button type='normal' onClick={this.onClick.bind(this)}>{ props.buttonName }</Button>
                            </div>
                        ) : null
                    }
                </div>
            );
        };
        return (
            <div className={className('cooNoneData')}>
                {
                    props.loading ? renderLoading() : renderContent()
                }
            </div>
        );
    }
}

NoneData.propTypes = {
    buttonName: propTypes.string,
    loading: propTypes.bool,
};

NoneData.defaultProps = {
    buttonName: '',
    loading: true
};

export default NoneData;
