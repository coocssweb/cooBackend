import React, {Component} from 'react';
import BraftEditor from 'braft-editor';
import '../styles/editor.scss';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.state = {
            height: props.height,
            editorState: BraftEditor.createEditorState(props.content)
        };
    }

    handleEditorChange (editorState) {
        this.setState({ editorState });
    }

    getContent () {
        return this.state.editorState.toHTML();
    }

    handleUpload (param) {
        const props = this.props;
        const serverURL = props.serverUrl;
        const xhr = new XMLHttpRequest;
        const fd = new FormData();

        const successFn = (response) => {
            const result = JSON.parse(response.currentTarget.responseText);
            const filename = result.response.filename;
            param.success({
                url: result.response.filename,
                meta: {
                    src: filename
                }
            })
        };

        const progressFn = (event) => {
            param.progress(event.loaded / event.total * 100);
        };

        const errorFn = (response) => {
            param.error({
                msg: 'unable to upload.'
            });
        };

        xhr.upload.addEventListener('progress', progressFn, false);
        xhr.addEventListener('load', successFn, false);
        xhr.addEventListener('error', errorFn, false);
        xhr.addEventListener('abort', errorFn, false);

        fd.append('files', param.file);
        xhr.open('POST', serverURL, true);
        if (props.token) {
            xhr.setRequestHeader('Authorization', props.token);
        }
        xhr.send(fd);
    }

    render () {
        const { height, editorState } = this.state;

        return (
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
        );
    }
}

export default Editor;
