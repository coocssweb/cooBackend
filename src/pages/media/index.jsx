import React, { Component } from "react";
import className from "classnames";
import {
  Button,
  Icon,
  Drawer,
  NoneData,
  Loading,
  Alert,
  Toast,
} from "@components";
import MediaForm from "./form";

class Index extends Component {
  constructor(props) {
    super(props);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);

    this.state = {
      visible: false,
      media: {},
    };
  }

  componentDidMount() {
    // 路由切换时，不重复加载已有的数据
    if (this.props.list.size) {
      return false;
    }
    this.props.fetch();
  }

  handleCreateClick() {
    this.setState({
      visible: true,
      media: {},
    });
  }

  handleEditClick(media) {
    this.setState({
      visible: true,
      media,
    });
  }

  handleDrawerClose() {
    this.setState({
      visible: false,
      media: {},
    });
  }

  handleRemove(item) {
    if (this.state.submitting) {
      return false;
    }
    this.setState({
      submitting: true,
    });
    this.props.remove(item.id, (result) => {
      this.setState({
        submitting: false,
      });
      if (result.meta.code !== 0) {
        Toast.tip(result.meta.error);
      }
    });
  }

  render() {
    const { state, props } = this;

    const renderList = () => {
      return props.list.size === 0 ? (
        <NoneData
          loading={props.loading}
          buttonName="去新建媒体渠道"
          onClick={this.handleCreateClick}
        >
          没有找到媒体
        </NoneData>
      ) : (
        <div className={className("tagList")}>
          {props.list.map((item) => {
            return (
              <div key={item.id} className={className("tagItem")}>
                <a
                  href="javascript:;"
                  className={className("tagItem-remove")}
                  onClick={this.handleRemove.bind(this, item)}
                >
                  <Icon type="delete" />
                </a>
                <div className="tagItem-cell">
                  <div className={className("tagItem-name")}>{item.name}</div>
                  <p className={className("tagItem-desc")}>
                    {item.description}
                  </p>
                  <Button
                    type="white"
                    onClick={this.handleEditClick.bind(this, item)}
                  >
                    编辑
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      );
    };

    const renderToolbar = () => {
      return props.list.size > 0 ? (
        <div className={className("tagToolbar")}>
          <Button size="large" onClick={this.handleCreateClick}>
            添加媒体渠道
            <Icon type="add" />
          </Button>
        </div>
      ) : null;
    };

    return (
      <div className={className("page tagPage")}>
        {renderList()}
        {renderToolbar()}
        <Drawer
          title="编辑媒体渠道"
          placement={state.placement}
          visible={state.visible}
          onClose={() => {
            this.setState({ visible: false });
          }}
          size={380}
        >
          <MediaForm
            media={state.media}
            onCreate={props.create}
            onClose={this.handleDrawerClose}
            onEdit={props.edit}
          />
        </Drawer>
      </div>
    );
  }
}

export default Index;
