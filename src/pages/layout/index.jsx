import React, {Component} from 'react';
import className from 'classnames';
import { Route, NavLink } from 'react-router-dom';
import Tag from '@containers/tag';
import Article from '@containers/article';
import User from '@containers/user';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {match} = this.props;
        return (
            <div className={className('layout')}>
                <header className={className('layout-header')}>
                    <h2 className={className('layout-title')}>一些分享</h2>
                    <User logout={this.props.logout} />
                </header>
                <aside className={className('layout-sidebar')}>
                    <ul className={className('layout-menus')}>
                        <li className={className('layout-menu')}>
                            <NavLink to={`${match.url}/tags`} className={className('layout-menuLink')} activeClassName={className('layout-menuLink--active')}>
                                <i className={className('layout-menuIcon')}></i>
                                <span className={className('layout-menuName')}>特色标签</span>
                            </NavLink>
                        </li>
                        <li className={className('layout-menu')}>
                            <NavLink to={`${match.url}/articles`} className={className('layout-menuLink')} activeClassName={className('layout-menuLink--active')}>
                                <i className={className('layout-menuIcon')}></i>
                                <span className={className('layout-menuName')}>我的分享</span>
                            </NavLink>
                        </li>
                    </ul>
                </aside>
                <div className={className('layout-main')}>
                    <Route path={`${match.path}/tags`} component={Tag} exact />
                    <Route path={`${match.path}/articles`} component={Article} exact />
                </div>
            </div>
        );
    }
}

export default Index;
