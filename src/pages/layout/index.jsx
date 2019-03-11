import React, {Component} from 'react';
import className from 'classnames';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={className('layout')}>
                <header className={className('layout-header')}>
                    <h2 className={className('layout-title')}>凤凰树下</h2>
                    <div className={className('layout-user')}>
                        <a href="javascript:;"></a>
                    </div>
                </header>
                <aside className={className('layout-sidebar')}>
                    <ul className={className('layout-menus')}>
                        <li className={className('layout-menu')}>
                            <a href="javascript:;" className={className('layout-menuLink')}>
                                <i className={className('layout-menuIcon')}></i>
                                <span className={className('layout-menuName')}>标签信息</span>
                            </a>
                        </li>
                        <li className={className('layout-menu')}>
                            <a href="javascript:;" className={className({'layout-menuLink--active': true, 'layout-menuLink': true})}>
                                <i className={className('layout-menuIcon')}></i>
                                <span className={className('layout-menuName')}>图册管理</span>
                            </a>
                        </li>
                        <li className={className('layout-menu')}>
                            <a href="javascript:;" className={className('layout-menuLink')}>
                                <i className={className('layout-menuIcon')}></i>
                                <span className={className('layout-menuName')}>文章信息</span>
                            </a>
                        </li>
                    </ul>
                </aside>
                <div className={className('layout-main')}>

                </div>
            </div>
        );
    }
}

export default index;
