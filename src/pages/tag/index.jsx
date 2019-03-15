import React, {Component} from 'react';
import className from 'classnames';
import { Button, Icon, Drawer, NoneData, Loading } from '@components';
import TagForm from './form';

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);

        this.state = {
            visible: false,
            list: [],
            tag: {}
        };
    }

    static getDerivedStateFromProps (props, state) {
        return {
            list: props.list
        };
    }

    componentDidMount () {
        this.props.fetch();
    }

    handleCreateClick () {
        this.setState({
            visible: true,
            tag: {}
        });
    }

    handleEditClick (tag) {
        this.setState({
            visible: true,
            tag
        });
    }

    handleRemoveClick () {
        this.props.remove(this.state.tag.id);
    }

    render() {
        const { state, props } = this;

        const renderList = () => {
            return state.list.size === 0 ? (
                <NoneData loading={props.loading} buttonName='去新建标签' onClick={this.handleCreateClick}>没有找到标签</NoneData>
            ) : (
                <div className={className('tagList')}>
                    {
                        state.list.map(item => {
                            return (
                                <div key={item.id}
                                     className={className('tagItem')}
                                     style={{ backgroundImage: `url(${item.poster})` }}>
                                    <div className="tagItem-cell">
                                        <div className={className('tagItem-name')}>{ item.name }</div>
                                        <p className={className('tagItem-desc')}>{ item.description }</p>
                                        <Button type="white" onClick={this.handleEditClick.bind(this, item)}>编辑</Button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        };

        const renderToolbar = () => {
            return state.list.size > 0 ? (
                <div className={className('tagToolbar')}>
                    <Button size="large" onClick={this.handleCreateClick}>添加标签<Icon type="add" /></Button>
                </div>
            ) : null;
        };

        // 删除按钮样式
        const removeButtonClass = className({
            'tagRemove': true,
            'tagRemove--show': !!state.tag.id
        });
        
        return (
            <div className={className('page tagPage')}>
                {
                    renderList()
                }
                {
                    renderToolbar()
                }
                <Drawer placement={state.placement} visible={state.visible} size={380}>
                    <TagForm
                        tag={state.tag}
                        onCreate={props.create}
                        onEdit={props.edit} />
                    <Button fill
                            type="danger"
                            size="large"
                            onClick={this.handleRemoveClick}
                            className={removeButtonClass}>删除这条记录</Button>
                </Drawer>
            </div>
        );
    }
}

export default Index;
