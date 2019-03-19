import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Button, Uploader, Editor } from '@components';

const initialData = {
    id: 0,
    title: '',
    description: '',
    content: '',
    tagId: 0,
    posters: []
};

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleUploaderClick = this.handleUploaderClick.bind(this);
        this.handleUploaderChange = this.handleUploaderChange.bind(this);
        let height = window.innerHeight - 400;
        this.state = {
            visible: false,
            height,
            ...(props.article || initialData),
            submitting: false
        };
    }

    handleSave () {
        const { state, props} = this;
        const content = this.editorRef.getContent() || '';
        const title = this.inputRef.value || '无标题分享';
        const description = content.replace(/<[^>]*>/ig, '').substring(0, 50);
        const postData = {
            id: state.id,
            title: title,
            description,
            posters: state.posters,
            content
        };

        this.setState({
            submitting: true
        });

        if (state.id) {
            props.onEdit(state.id, postData, this.handleDone.bind(this));
        } else {
            props.onCreate(postData, this.handleDone.bind(this));
        }
    }

    handleDone () {
        setTimeout(() => {
            this.setState({
                submitting: false
            });
        }, 500);
    }

    handleUploaderClick (item, index) {
        this.setState({
            visible: true
        });
    }

    handleUploaderChange (images) {
        this.setState({
            posters: images
        });
    }

    render () {
        const state = this.state;
        const { height, placement } = state;
        return (
            <div className={className('articleForm')}>
                <div className={className('articleForm-title')}>
                    <input className={className('articleForm-input')}
                           defaultValue={state.title}
                           placeholder="无标题分享"
                           type="text" ref={ ref => {this.inputRef = ref} } />
                </div>
                <div className={className('articleForm-content')}>
                    <Editor height={height}
                            content={state.content}
                            ref={ ref => {this.editorRef = ref} } />
                </div>
                <div className={className('articleForm-photo')}>
                    <Uploader token={`bearer ${localStorage.getItem('access_token')}`}
                              onClick={this.handleUploaderClick}
                              onChange={this.handleUploaderChange}
                              max={5}
                              serverUrl={`${API}tool/upload`}
                              images={state.posters} />
                </div>
                <div className={className('articleForm-toolbar')}>
                    <Button loading={state.submitting} onClick={this.handleSave}>保存数据</Button>
                </div>
            </div>
        );
    }
}

export default Index;
