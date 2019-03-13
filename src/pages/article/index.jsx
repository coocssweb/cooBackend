import React, {Component} from 'react';
import className from 'classnames';
import { Button, Icon, Drawer } from '@components';
import ArticleForm from './form';
import ArticleItem from './articleItem';
import ArticleDetailForm from './detailForm';
class Index extends Component {
    constructor(props) {
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.state = {
            visible: false,
            articles: [
                {
                    id: 10,
                    title: '家是一个令人眩晕的洞',
                    posters: ['https://img3.doubanio.com/view/note/l/public/p57911904.webp'],
                    description: '编者按：跳水蛙、冷吃兔、灯会和恐龙化石遗址，今天，韩松带我们游览四川自贡了！未来某天，自贡高铁站热闹欢腾，霓虹闪烁？'
                },
                {
                    id: 11,
                    title: '家是一个令人眩晕的洞',
                    posters: ['https://img3.doubanio.com/view/note/l/public/p57911904.webp'],
                    description: '编者按：跳水蛙、冷吃兔、灯会和恐龙化石遗址，今天，韩松带我们游览四川自贡了！未来某天，自贡高铁站热闹欢腾，霓虹闪烁？'
                },
                {
                    id: 12,
                    title: '家是一个令人眩晕的洞',
                    posters: ['https://img3.doubanio.com/view/note/l/public/p57911904.webp'],
                    description: '编者按：跳水蛙、冷吃兔、灯会和恐龙化石遗址，今天，韩松带我们游览四川自贡了！未来某天，自贡高铁站热闹欢腾，霓虹闪烁？'
                },
                {
                    id: 13,
                    title: '家是一个令人眩晕的洞',
                    posters: ['https://img3.doubanio.com/view/note/l/public/p57911904.webp'],
                    description: '编者按：跳水蛙、冷吃兔、灯会和恐龙化石遗址，今天，韩松带我们游览四川自贡了！未来某天，自贡高铁站热闹欢腾，霓虹闪烁？'
                }
            ]
        };
    }

    handleCreateClick () {

    }

    render () {
        const state = this.state;
        return (
            <div className={className('page articlePage clearfix')}>
                <div className={className('articleLeft')}>
                    <div className={className('articleToolbar')}>
                        <Button onClick={this.handleCreateClick}>添加分享<Icon type="add" /></Button>
                    </div>
                    <div className={className('articleList')}>
                        { state.articles.map(item => <ArticleItem key={item.id} article={item}  />) }
                    </div>
                </div>
                <div className="articleRight">
                    <ArticleForm />
                </div>
                <Drawer placement={state.placement} visible={state.visible} size={380}>

                </Drawer>
            </div>
        );
    }
}

export default Index;
