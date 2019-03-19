import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Button, Icon } from '@components';

class ArticleItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            open: false,
            submitting: false
        };
    }

    handleRemove (e) {
        e.stopPropagation();
        const props = this.props;
        this.setState({
            submitting: true
        });
        props.onRemove(props.article, () => {
            this.setState({
                submitting: false
            });
        });
    }

    handleSelect () {
        const props = this.props;
        props.onSelect(props.article);
    }

    render() {
        const { props, state} = this;
        const article = props.article;
        const itemClassName = className({
            'articleItem': true,
            'articleItem--selected': props.selected
        });

        return (
            <div className={itemClassName} onClick={ this.handleSelect }>
                <Button type="normal"
                        size="small"
                        loading={state.submitting}
                        onClick={this.handleRemove}
                        className={className('articleItem-remove')}>删除</Button>
                <div className={className('articleItem-title')}>
                    { article.title }
                </div>
                <div className={className('articleItem-description')}>
                    { article.description }
                </div>
            </div>
        );
    }
}

export default ArticleItem;
