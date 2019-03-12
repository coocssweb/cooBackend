import React, {Component} from 'react';
import className from 'classnames';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                    id: 10,
                    title: '家是一个令人眩晕的洞',
                    posters: ['https://img3.doubanio.com/view/note/l/public/p57911904.webp'],
                    description: '编者按：跳水蛙、冷吃兔、灯会和恐龙化石遗址，今天，韩松带我们游览四川自贡了！未来某天，自贡高铁站热闹欢腾，霓虹闪烁，不过他在安检口遇到了一个人生大问题：回不去的家乡，是否能以别的方式重现？'
                }
            ]
        };
    }

    render () {
        const state = this.state;
        return (
            <div className={className('page')}>
                <div className={className('articleList')}>
                    {
                        state.articles.map(item => {
                            return (
                                <div key={item.id} className={className('article')}>
                                    <div className={className('article-title')}>
                                        { item.title }
                                    </div>
                                    <div className={className('article-description')}>
                                        {
                                            item.posters.length > 0 ? (
                                                <div className={className('article-poster')}></div>
                                            ) : null
                                        }
                                        { item.description }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default index;
