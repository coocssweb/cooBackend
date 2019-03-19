import React, {Component} from 'react';
import className from 'classnames';
import { Button, Icon, Drawer, NoneData, Loading, Alert } from '@components';
import TagForm from './form';

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);

        this.state = {
            visible: false,
            list: [],
            tag: {},
        };
    }

    static getDerivedStateFromProps (props, state) {
        return {
            list: props.list
        };
    }

    componentDidMount () {
        // 路由切换时，不重复加载已有的数据
        if (this.props.list.size) {
            return false;
        }
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

    handleDrawerClose () {
        this.setState({
            visible: false,
            tag: {}
        });
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
        
        return (
            <div className={className('page tagPage')}>
                {
                    renderList()
                }
                {
                    renderToolbar()
                }
                <Drawer title="编辑标签信息"
                        placement={state.placement}
                        visible={state.visible}
                        size={380}>
                    <TagForm
                        tag={state.tag}
                        onCreate={props.create}
                        onClose={this.handleDrawerClose}
                        onRemove={props.remove}
                        onEdit={props.edit} />
                </Drawer>
            </div>
        );
    }
}

export default Index;
