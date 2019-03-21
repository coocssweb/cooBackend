import React, {Component} from 'react';
import className from 'classnames';
import { Route, NavLink } from 'react-router-dom';
import Tag from '@containers/tag';
import Article from '@containers/article';
import User from '@containers/user';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    componentDidMount () {
        document.title = '主页';
    }

    render() {
        const props = this.props;
        const {match} = props;
        return (
            <div className={className('layout')}>
                <header className={className('layout-header')}>
                    <h2 className={className('layout-title')}>一些分享</h2>
                    <User logout={props.logout} />
                </header>
                <aside className={className('layout-sidebar')}>
                    <ul className={className('layout-menus')}>
                        <li className={className('layout-menu')}>
                            <NavLink
                                to={`${match.url}/tags`}
                                className={className('layout-menuLink')}
                                activeClassName={className('layout-menuLink--active')}>
                                <span className={className('layout-menuName')}>栏目</span>
                            </NavLink>
                        </li>
                        <li className={className('layout-menu')}>
                            <NavLink
                                to={`${match.url}/articles/thinks`}
                                className={className('layout-menuLink')}
                                activeClassName={className('layout-menuLink--active')}>
                                <span className={className('layout-menuName')}>想法</span>
                            </NavLink>
                        </li>
                        <li className={className('layout-menu')}>
                            <NavLink
                                to={`${match.url}/articles/photos`}
                                className={className('layout-menuLink')}
                                activeClassName={className('layout-menuLink--active')}>
                                <span className={className('layout-menuName')}>照片</span>
                            </NavLink>
                        </li>
                        <li className={className('layout-menu')}>
                            <NavLink
                                to={`${match.url}/articles/musics`}
                                className={className('layout-menuLink')}
                                activeClassName={className('layout-menuLink--active')}>
                                <span className={className('layout-menuName')}>音乐</span>
                            </NavLink>
                        </li>
                        <li className={className('layout-menu')}>
                            <NavLink
                                to={`${match.url}/articles/shares`}
                                className={className('layout-menuLink')}
                                activeClassName={className('layout-menuLink--active')}>
                                <span className={className('layout-menuName')}>转载</span>
                            </NavLink>
                        </li>
                    </ul>
                </aside>
                <div className={className('layout-main')}>
                    <Route path={`${match.path}/tags`} component={Tag} exact />
                    <Route path={`${match.path}/articles/musics`} render={(props) => <Article {...props} classify="musics" classifyName="音乐" />} exact />
                    <Route path={`${match.path}/articles/photos`} render={(props) => <Article {...props} classify="photos" classifyName="照片" />} exact />
                    <Route path={`${match.path}/articles/shares`} render={(props) => <Article {...props} classify="shares" classifyName="转载" />} exact />
                    <Route path={`${match.path}/articles/thinks`} render={(props) => <Article {...props} classify="thinks" classifyName="想法" />} exact />
                </div>
            </div>
        );
    }
}

export default Index;
