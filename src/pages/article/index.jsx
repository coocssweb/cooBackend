import React, {Component} from 'react';
import className from 'classnames';
import { Button, Icon, Drawer, NoneData } from '@components';
import ArticleForm from './form';
import ArticleItem from './articleItem';

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleNewClick = this.handleNewClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            list: [],
            article: null,
            prevArticle: null
        };
    }

    componentDidMount () {
        if (this.props.list.size) {
            return false;
        }

        this.props.fetch();
    }

    static getDerivedStateFromProps (props, state) {
        let article = null;
        if (!props.list.size) {
            // 清空列表数据，则置空编辑信息
            article = (state.article && state.article.id) ? null : state.article
        } else {
            // 列表有数据，没有正在编辑的分享，则获取首篇文章
            // 否则，保留原本的文章
            article = !state.article ? props.list.get(0) : state.article;
        }

        return {
            list: props.list,
            article
        };
    }

    handleNewClick () {
        this.setState({
            article: {}
        });
    }

    handleRemove (article, done) {
        this.props.remove(article.id, (result) => {
            if (result.meta.code !== 0) {
                done();
                return false;
            }
            // 删除正在编辑的数据
            if (article.id === this.state.article.id) {
                // 中间件最后一节会引起state变化
                // 所以，做setTimeout
                setTimeout(() => {
                    this.setState({
                        article: null
                    });
                }, 0);
            }
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

    handleCreate (article, done) {
        this.props.create(article, (result) => {
            done();
            if (result.meta.code !== 0) {
                return false;
            }

            this.setState({
                article: result.response
            });
        });
    }

    handleEdit (id, article, done) {
        this.props.edit(id, article, (result) => {
            done();
            if (result.meta.code === 0) {

            }
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
                        <Button onClick={this.handleNewClick}>添加分享<Icon type="add" /></Button>
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
                                          onCreate={this.handleCreate}
                                          onEdit={this.handleEdit} />
                            ) : null
                    }
                </div>
            </div>
        );
    }
}

export default Index;
