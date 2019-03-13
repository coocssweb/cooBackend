import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Button, Uploader, Editor, Drawer, Form, Input } from '@components';
const { TextArea } = Input;
const { FormLine, FormItem } = Form;
class Index extends Component {
    constructor(props) {
        super(props);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleUploaderClick = this.handleUploaderClick.bind(this);
        let height = window.innerHeight - 400;
        this.state = {
            visible: false,
            height
        };
    }

    handleEditorChange () {

    }

    handleSave () {

    }

    handleUpload (param) {

    }

    handleUploaderClick (item, index) {
        this.setState({
            visible: true
        });
    }

    render () {
        const state = this.state;
        const { height, placement } = state;
        return (
            <div className={className('articleForm')}>
                <div className={className('articleForm-title')}>
                    <input className={className('articleForm-input')} placeholder="请输入标题" type="text" />
                </div>
                <div className={className('articleForm-content')}>
                    <Editor height={height} content="" onChange={this.handleEditorChange} />
                </div>
                <div className={className('articleForm-photo')}>
                    <Uploader onClick={this.handleUploaderClick} max={2} images={['https://photo.tuchong.com/1732720/ft640/83757108.webp']} />
                </div>
                <div className={className('articleForm-toolbar')}>
                    <Button onClick={this.handleSave}>保存数据</Button>
                </div>
                <Drawer placement={state.placement} visible={state.visible} size={380}>
                    <Form title='编辑图片信息'>
                        <FormLine>
                            <FormItem label='图片:'>
                                <Uploader readonly images={['https://photo.tuchong.com/1732720/ft640/83757108.webp']} />
                            </FormItem>
                        </FormLine>
                        <FormLine>
                            <FormItem label='描述'>
                                <TextArea size="large" placeholder="请输入描述信息" />
                            </FormItem>
                        </FormLine>
                    </Form>
                </Drawer>
            </div>
        );
    }
}

export default Index;
