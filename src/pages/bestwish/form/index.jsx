import React, { Component } from "react";
import { Input, Form, Select, Validation, Alert, Switch } from "@components";

const { FormLine, FormItem } = Form;
const { Option } = Select;

const initialData = {
  id: 0,
  enable: 1,
  mediaId: 0,
  code: "",
  description: "",
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
    this.state = {
      ...initialData,
      prevProps: {},
      formRef: React.createRef(),
      alertInfo: "",
      alertType: "",
      showAlert: false,
      submitting: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // todo，思考initialData 的更好写法
    const bestwish = props.bestwish;
    if (state.prevProps.id !== bestwish.id) {
      // 重置 Form 表单的验证状态
      state.formRef.current && state.formRef.current.reset();
      return {
        ...(bestwish.id ? bestwish : initialData),
        mediaId: bestwish.mediaId,
        code: bestwish.code,
        prevProps: bestwish,
        showAlert: false,
      };
    }
    return null;
  }

  saveCallback(result) {
    this.setState({
      showAlert: true,
      alertType: result.meta.code === 0 ? "primary" : "danger",
      alertInfo: result.meta.code === 0 ? "投放信息编辑成功" : result.meta.msg,
      id: result.response.id,
      submitting: false,
    });
  }

  handleSave() {
    const { state, props } = this;
    this.setState({
      submitting: true,
    });

    const postData = {
      id: state.id,
      code: state.code,
      mediaId: state.mediaId,
      description: state.description,
      enable: state.enable,
    };
    setTimeout(() => {
      if (state.id) {
        props.onEdit(state.id, postData, this.saveCallback.bind(this));
      } else {
        props.onCreate(postData, this.saveCallback.bind(this));
      }
    }, 500);
  }

  handleSelectChange(value) {
    const media = this.props.mediaMap[value.value] || {};
    this.setState({
      mediaId: media.id,
      code: media.code,
    });
  }

  handleInputChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  handleSwitchChange(value) {
    this.setState({
      enable: +value,
    });
  }

  render() {
    const state = this.state;

    return (
      <React.Fragment>
        {state.showAlert ? (
          <Alert
            type={state.alertType}
            onClose={() => {
              this.setState({ showAlert: false });
            }}
          >
            {state.alertInfo}
          </Alert>
        ) : null}
        <Form
          submitting={state.submitting}
          ref={state.formRef}
          onSave={this.handleSave}
        >
          <FormLine>
            <FormItem label="投放媒体">
              <Select
                size="large"
                value={+state.mediaId}
                onChange={this.handleSelectChange}
                validations={[Validation.required.bind(this, "投放媒体")]}
              >
                {this.props.medias.map((media) => {
                  return <Option value={media.id}>{media.name}</Option>;
                })}
              </Select>
            </FormItem>
          </FormLine>
          <FormLine>
            <FormItem label="投放指令">
              <Input.TextArea
                size="large"
                value={state.description}
                validations={[Validation.required.bind(this, "请输入指令")]}
                onChange={this.handleInputChange.bind(this, "description")}
                placeholder="请输入指令"
              />
            </FormItem>
          </FormLine>

          <FormLine>
            <FormItem label="是否可用">
              <Switch
                checked={state.enable === 1}
                onChange={this.handleSwitchChange}
              />
            </FormItem>
          </FormLine>
        </Form>
      </React.Fragment>
    );
  }
}

export default Index;
