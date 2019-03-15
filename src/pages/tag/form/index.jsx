import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Input, Form, Uploader, Select } from '@components';
const { FormLine, FormItem } = Form;
const { Option } = Select;

const initialData = {
    id: 0,
    name: '',
    path: '',
    images: [],
    type: '',
    description: ''
};

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleUploaderChange = this.handleUploaderChange.bind(this);
        this.state = {
            ...initialData,
            prevProps: {}
        };
    }

    static getDerivedStateFromProps (props, state) {
        // todo，思考initialData 的更好写法
        const tag = props.tag;
        if (state.prevProps.id !== tag.id) {
            return {
                ...(tag.name ? tag  : initialData),
                images: tag && tag.poster ? [tag.poster] : [],
                prevProps: tag
            };
        }
        return null;
    }

    handleSave () {
        const { state, props} = this;

        const postData = {
            ...state,
            poster: state.images[0]
        };
        delete postData.images;
        !state.id ? props.onCreate(postData) : props.onEdit(state.id, postData);

    }

    handleSelectChange (value) {
        this.setState({
            type: value.value
        });
    }

    handleInputChange (key, value) {
        this.setState({
            [key]: value
        });
    }

    handleUploaderChange (images) {
        this.setState({
            images
        });
    }

    render() {
        const state = this.state;
        return (
            <Form title="填写标签信息" onSave={this.handleSave}>
                <FormLine>
                    <FormItem label='名称'>
                        <Input size="large"
                               value={state.name}
                               onChange={this.handleInputChange.bind(this, 'name')}
                               placeholder="请输入名称" />
                    </FormItem>
                </FormLine>
                <FormLine>
                    <FormItem label='路径'>
                        <Input size="large"
                               value={state.path}
                               onChange={this.handleInputChange.bind(this, 'path')}
                               placeholder="请输入路径" />
                    </FormItem>
                </FormLine>
                <FormLine>
                    <FormItem label='标签'>
                        <Select size="large" value={state.type}  onChange={this.handleSelectChange}>
                            <Option value="article">分享</Option>
                            <Option value="photos">图集</Option>
                            <Option value="music">音乐</Option>
                        </Select>
                    </FormItem>
                </FormLine>
                <FormLine>
                    <FormItem label='描述'>
                        <Input.TextArea size="large" value={state.description}
                                        onChange={this.handleInputChange.bind(this, 'description')}
                                        placeholder="请输入描述" />
                    </FormItem>
                </FormLine>
                <FormLine>
                    <FormItem label='封面'>
                        <Uploader token={`bearer ${localStorage.getItem('access_token')}`}
                                  max={1}
                                  images={state.images}
                                  serverUrl={`${API}tool/upload`}
                                  onChange={this.handleUploaderChange} />
                    </FormItem>
                </FormLine>
            </Form>
        );
    }
}

export default Index;
