import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Button, Icon } from '@components';

class ArticleItem extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            open: false
        };
    }

    onDelete () {
        this.setState((prevState) => {
            return {
                open: !prevState.open
            };
        });
    }

    render() {
        const { props, state} = this;
        const article = props.article;
        return (
            <div className={className('articleItem')}>
                <Button type="normal" size="small" className={className('articleItem-edit')}>编辑</Button>
                <div className={className('articleItem-title')}>
                    { article.title }
                </div>
                <div className={className('articleItem-description')}>
                    { article.description }
                </div>
                <a href="javascript:;" className={className('articleItem-toggle')} onClick={this.onDelete}>删除</a>
            </div>
        );
    }
}

export default ArticleItem;
