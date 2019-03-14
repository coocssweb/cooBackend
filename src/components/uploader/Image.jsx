import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Icon from '../icon';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const props = this.props;
        return (
            <div className={className('cooUploader-item')}>
                <div className={className('cooUploader-image')}
                     onClick={props.onClick}
                     style={{backgroundImage: `url(${props.imagePath})`}} >
                </div>
                {
                    !props.readonly ? (
                        <a href="javascript:;"
                           onClick={props.onRemoveClick}
                           className={className('cooUploader-remove')}><Icon type="circle-close" /></a>
                    ) : null
                }
            </div>
        );
    }
}

Image.defaultProps = {
    readonly: false,
};

Image.propTypes = {
    readonly: propTypes.bool,
    imagePath: propTypes.string
};

export default Image;
