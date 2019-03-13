import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Button, Uploader } from '@components';
import BraftEditor from 'braft-editor';
import '../../../assets/scss/editor.scss';

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        let height = window.innerHeight - 400;
        this.state = {
            height,
            editorState: BraftEditor.createEditorState(null)
        };
    }

    handleEditorChange () {

    }

    handleSave () {

    }

    handleUpload () {

    }

    render () {
        const { editorState, height } = this.state;
        return (
            <div className={className('articleForm')}>
                <div className={className('articleForm-title')}>
                    <input className={className('articleForm-input')} placeholder="请输入标题" type="text" />
                </div>
                <div className={className('articleForm-content')}>
                    <BraftEditor
                        value={editorState}
                        controls={[
                            'headings', 'text-color', 'bold', 'italic', 'underline', 'separator',
                            'emoji', 'text-align', 'separator',
                            'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
                            'link', 'separator', 'hr', 'separator',
                            'media', 'separator',
                            'clear'
                        ]}
                        contentStyle={{ height: `${height}px` }}
                        media={{uploadFn: this.handleUpload}}
                        onChange={this.handleEditorChange}
                    />
                </div>
                <div className={className('articleForm-photo')}>
                    <Uploader max={2} images={['https://photo.tuchong.com/1732720/ft640/83757108.webp']} />
                </div>
                <div className={className('articleForm-toolbar')}>
                    <Button onClick={this.handleSave}>保存数据</Button>
                </div>
            </div>
        );
    }
}

export default Index;
