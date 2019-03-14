import React, {Component} from 'react';
import className from 'classnames';
import { Button, Icon, Drawer, NoneData, Loading } from '@components';
import TagForm from './form';
class Index extends Component {
    constructor(props) {
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.state = {
            visible: true,
            tags: [

            ]
        };
    }

    componentDidMount () {
        this.props.fetch();
    }

    handleCreateClick () {
        this.setState({
            visible: true
        });
    }

    handleEditClick () {
        this.setState({
            visible: true
        });
    }

    render() {
        const { state, props } = this;

        const renderList = () => {
            return state.tags.length === 0 ? (
                <NoneData loading={props.loading} buttonName='去新建标签' onClick={this.handleCreateClick}>没有找到标签</NoneData>
            ) : (
                <div className={className('tagList')}>
                    {
                        state.tags.map(item => {
                            return (
                                <div key={item.id}
                                     className={className('tagItem')}
                                     style={{ backgroundImage: `url(${item.poster})` }}>
                                    <div className="tagItem-cell">
                                        <div className={className('tagItem-name')}>{ item.name }</div>
                                        <p className={className('tagItem-desc')}>{ item.desc }</p>
                                        <Button type="white" onClick={this.handleEditClick}>编辑</Button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        };

        const renderToolbar = () => {
            return state.tags.length > 0 ? (
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
                <Drawer placement={state.placement} visible={state.visible} size={380}>
                    <TagForm onCreate={props.create} />
                </Drawer>
            </div>
        );
    }
}

export default Index;
