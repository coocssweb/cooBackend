import React, {Component} from 'react';
import className from 'classnames';
import { Button, Icon, Drawer } from '@components';
import TagForm from './form';
class Index extends Component {
    constructor(props) {
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.state = {
            visible: true,
            tags: [
                {
                    id: 1,
                    name: '京都',
                    path: 'jingdu',
                    poster: 'https://drscdn.500px.org/photo/290268443/q%3D80_h%3D600/v2?webp=true&sig=e52047fd9cb58d1a2c58862d8ffbf67415e560b850c3080546200b3491177b0d',
                    desc: '当季推荐',
                },
                {
                    id: 2,
                    name: '成都',
                    path: 'chengdu',
                    poster: 'https://drscdn.500px.org/photo/296353715/q%3D80_h%3D450/v2?webp=true&sig=d695b7ba87da8781ba9bb4c1245c99036d8111dc1f166a6cc14dc754b4665755',
                    desc: '当季推荐',
                },
            ]
        };
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
        const { state } = this;
        return (
            <div className={className('page')}>
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
                <div className={className('tagToolbar')}>
                    <Button size="large" onClick={this.handleCreateClick}>加新标签<Icon type="add" /></Button>
                </div>
                <Drawer placement={state.placement} visible={state.visible} size={380}>
                    <TagForm />
                </Drawer>
            </div>
        );
    }
}

export default Index;
