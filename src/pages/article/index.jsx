import React, {Component} from 'react';
import className from 'classnames';
import { Button, Icon, Drawer, NoneData } from '@components';
import ArticleForm from './form';
import ArticleItem from './articleItem';

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            list: [],
            total: [],
            article: null,
            prevArticle: null
        };
    }

    componentDidMount () {
        // 路由切换时，防止重新加载数据
        if (this.props.list.size) {
            return false;
        }

        this.props.fetch();
    }

    static getDerivedStateFromProps (props, state) {
        let article = null;
        if (!props.list.size) {
            // 列表无数据，如果是删除数据的，则置空编辑信息
            article = (state.article && state.article.id) ? null : state.article
        } else  if (state.total === 0 && props.list.size) {
            // 添加首条成功后，获取首条数据
            article  = props.list.get(0);
        } else {
            // 列表有数据，没有正在编辑的分享，则获取首篇文章
            // 否则，保留原本的文章
            article = !state.article ? props.list.get(0) : state.article
        }

        return {
            list: props.list,
            total: props.list.size,
            article
        };
    }

    handleCreateClick () {
        this.setState({
            article: {}
        });
    }

    handleRemove (article) {
        this.props.remove(article.id, (result) => {
            console.log(result);
        });
    }

    handleSelect (article) {
        if (article.id === this.state.id) {
            return false;
        }
        this.setState({
            article
        });
    }

    render () {
        const { state, props} = this;
        const articleId = state.article ? state.article.id : null;
        const renderList = () => {
            return state.list.size === 0 ? (
                <NoneData loading={props.loading}>没有找到文件</NoneData>
            ) : (
                <div className={className('articleList')}>
                    {
                        state.list.map(item => <ArticleItem
                            key={item.id} article={item}
                            selected={articleId === item.id}
                            onRemove={this.handleRemove}
                            onSelect={this.handleSelect}
                        />)
                    }
                </div>
            );
        };

        return (
            <div className={className('page articlePage clearfix')}>
                <div className={className('articleLeft')}>
                    <div className={className('articleToolbar')}>
                        <Button onClick={this.handleCreateClick}>添加分享<Icon type="add" /></Button>
                    </div>
                    <div className={className('articleList')}>
                        { renderList() }
                    </div>
                </div>
                <div className="articleRight">
                    {
                        state.article ?
                            (
                                <ArticleForm key={state.article.id}
                                          article={state.article}
                                          onCreate={props.create}
                                          onEdit={props.edit} />
                            ) : null
                    }
                </div>
            </div>
        );
    }
}

export default Index;
