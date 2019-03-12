import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Image from './Image';
import Icon from '../icon';

class Uploader extends Component {
    constructor (props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            images: []
        };
    }

    static getDerivedStateFromProps (nextProps) {
        return {
            images: nextProps.images
        };
    }

    shouldComponentUpdate (nextProps, nextState) {
        const images = this.state.images;
        const nextImages = nextState.images;

        if (images.length !== nextImages.length) {
            return true;
        }


        let shouldUpdate = false;
        for (let index of images.keys()) {
            if (images[index] !== nextImages[index]) {
                shouldUpdate = true;
                break;
            }
        }

        return shouldUpdate;
    }

    onChange () {
        const props = this.props;
        if ('onChange' in props) {
            props.onChange(this.state.images);
        }
    }

    onUpload () {

    }

    onClick () {
        this.fileRef.click();
    }

    render () {
        const props = this.props;
        return (
            <div className={className('cooUploader cooClearfix')}>
                {
                    props.images.map(item => {
                        return (
                            <Image key={item}
                                   imagePath={item}
                                   readonly={props.readonly} />
                        );
                    })
                }

                {
                    props.images.length < props.max ? (
                        <a href="javascript:;"
                           className={className('cooUploader-button')}
                           onClick={this.onClick}><Icon type="add" /></a>
                    ) : null
                }
                <input className={className('cooUploader-file')}
                       type="file"
                       onChange={this.onUpload}
                       ref={(ref) => { this.fileRef = ref }} />
            </div>
        );
    }
}

Uploader.defaultProps = {
    max: 1,
    readonly: false,
    images: []
};

Uploader.propTypes = {
    size: propTypes.number,
    readonly: propTypes.bool,
    images: propTypes.array
};

export default Uploader;
