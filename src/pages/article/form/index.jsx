import React, {Component} from 'react';
import className from 'classnames';
import { Button, Uploader, Editor, Toast } from '@components';

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
        const content = (this.editorRef.getContent() || '').trim();
        const title = this.inputRef.value.trim();
        const description = content.replace(/<[^>]*>/ig, '').substring(0, 50);

        if (title === '') {
            Toast.tip('请输入标题');
            return;
        }

        if (description === '') {
            Toast.tip('请输入内容');
            return;
        }

        const postData = {
            id: state.id,
            title: title,
            description,
            posters: state.posters,
            classify: props.classify,
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

    handleDone (result) {
        Toast.tip(result.meta.code > 0 ? result.meta.msg : '保存成功');
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
                           placeholder="请输入标题"
                           type="text" ref={ ref => {this.inputRef = ref} } />
                </div>
                <div className={className('articleForm-content')}>
                    <Editor height={height}
                            content={state.content}
                            serverUrl={`${API}tool/upload`}
                            ref={ ref => {this.editorRef = ref} }
                            token={`bearer ${localStorage.getItem('access_token')}`} />
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
