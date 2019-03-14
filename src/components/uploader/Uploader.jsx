import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Image from './Image';
import Icon from '../icon';
import util from '../_util';
const _util = util();

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

    static getDerivedStateFromProps (props, state) {
        const prevProps = state.prevProps || { images: [] };
        if (!_util.isEqualArray(props.images, prevProps.images)) {
            return {
                images: props.images,
                prevProps: props
            };
        }

        return null;
    }

    shouldComponentUpdate (nextProps, nextState) {
        const images = this.state.images;
        const nextImages = nextState.images;

        return !_util.isEqualArray(images, nextImages);
    }

    onChange (images) {
        const props = this.props;
        if ('onChange' in props) {
            props.onChange(images);
        }
    }

    onUpload () {
        const props = this.props;
        if (!props.serverUrl) {
            return false;
        }

        const file = this.fileRef.files[0];
        const formData = new FormData();
        formData.append('files', file);

        const progressFn = (event) => {
            // 上传进度
            console.log(event.loaded / event.total * 100);
        };

        const errorFn = (response) => {
            console.log(response);
        };

        const successFn = (response) => {
            const result = JSON.parse(response.currentTarget.responseText);
            const images = [...this.state.images, result.response.filename];
            this.setState({
                images
            });
            this.onChange(images);
        };

        const xhr = new XMLHttpRequest;
        xhr.upload.addEventListener('progress', progressFn, false);
        xhr.addEventListener('load', successFn, false);
        xhr.addEventListener('error', errorFn, false);
        xhr.addEventListener('abort', errorFn, false);
        xhr.open('POST', props.serverUrl, true);
        xhr.contentType = 'multipart/form-data';
        if (props.token) {
            xhr.setRequestHeader('Authorization', props.token);
        }
        xhr.send(formData);
    }

    onClick () {
        this.fileRef.click();
    }

    onPhotoClick (item, index) {
        const props = this.props;
        if ('onClick' in props) {
            props.onClick(item, index);
        }
    }

    render () {
        const props = this.props;
        const state = this.state;
        return (
            <div className={className('cooUploader cooClearfix')}>
                {
                    state.images.map((item, index) => {
                        return (
                            <Image key={item}
                                   imagePath={item}
                                   onClick={this.onPhotoClick.bind(this, item, index)}
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
    images: [],
    serverUrl: '',
    token: ''
};

Uploader.propTypes = {
    size: propTypes.number,
    readonly: propTypes.bool,
    images: propTypes.array,
    serverUrl: propTypes.string,
    token: propTypes.string
};

export default Uploader;
