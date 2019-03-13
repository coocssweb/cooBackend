import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Input, Form, Uploader, Select } from '@components';
const { FormLine, FormItem } = Form;
const { Option } = Select;

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {};
    }

    handleSave () {

    }

    handleSelectChange () {

    }

    render() {
        return (
            <Form title="填写标签信息" onSave={this.handleSave}>
                <FormLine>
                    <FormItem label='名称'>
                        <Input size="large" placeholder="请输入名称" />
                    </FormItem>
                </FormLine>

                <FormLine>
                    <FormItem label='路径'>
                        <Input size="large" placeholder="请输入路径" />
                    </FormItem>
                </FormLine>
                <FormLine>
                    <FormItem label='标签'>
                        <Select size="large" onChange={this.handleSelectChange}>
                            <Option value="article">分享</Option>
                            <Option value="photos">图集</Option>
                            <Option value="music">音乐</Option>
                        </Select>
                    </FormItem>
                </FormLine>
                <FormLine>
                    <FormItem label='描述'>
                        <Input.TextArea size="large" placeholder="请输入描述" />
                    </FormItem>
                </FormLine>

                <FormLine>
                    <FormItem label='封面'>
                        <Uploader max={2} images={['https://photo.tuchong.com/1732720/ft640/83757108.webp']} />
                    </FormItem>
                </FormLine>
            </Form>
        );
    }
}

export default Index;
