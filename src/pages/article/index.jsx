import React, {Component} from 'react';
import className from 'classnames';
import { Button, Icon, Drawer, NoneData, Toast } from '@components';
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
            article: null,
            prevArticle: null
        };
    }

    componentDidMount () {
        this.props.fetch(this.props.classify);
    }

    componentDidUpdate () {

    }

    componentWillUnmount () {
        this.props.clear();
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
            Toast.tip(result.meta.code > 0 ? result.meta.msg : '删除成功');
            if (result.meta.code !== 0) {
                done(result);
                return false;
            }

            // 删除正在编辑的数据
            if (article.id === this.state.article.id) {
                this.setState({
                    article: null
                });
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
            done(result);
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
            done(result);
        });
    }

    render () {
        const { state, props} = this;
        const articleId = state.article ? state.article.id : null;
        const renderList = () => {
            return props.list.size === 0 ? (
                <NoneData loading={props.loading}>没有找到文件</NoneData>
            ) : (
                <div className={className('articleList')}>
                    {
                        props.list.map(item => <ArticleItem
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
                        <Button onClick={this.handleNewClick}>添加{props.classifyName}<Icon type="add" /></Button>
                    </div>
                    <div className={className('articleList')}>
                        { renderList() }
                    </div>
                </div>
                <div className="articleRight">
                    {
                        state.article ?
                            (
                                <ArticleForm
                                    key={state.article.id}
                                    classify={props.classify}
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
