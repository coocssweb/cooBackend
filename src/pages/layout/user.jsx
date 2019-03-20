import React, {Component} from 'react';
import className from 'classnames';
import { NavLink } from 'react-router-dom';
import { Dropdown } from '@components';

class User extends Component {
    constructor (props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            info: null
        };
    }

    componentDidMount () {
        !this.state.info && this.props.fetchInfo();
    }

    static getDerivedStateFromProps (props, state) {
        return {
            info: props.info
        };
    }

    handleLogout () {
        this.props.logout();
    }

    render () {
        const state = this.state;
        return (
            <React.Fragment>
                {
                    state.info ? (
                        <div className={className('layout-user')}>
                            <Dropdown placement="right bottom">
                                <Dropdown.Menu>
                                    <img src={state.info.avatar} className={className('userInfo-avatar')} />
                                </Dropdown.Menu>
                                <Dropdown.Content>
                                    <ul className={className('userInfo')}>
                                        <li className={className('userInfo-item')}>
                                            <span className={className('userInfo-span')}>{ state.info.nickname }</span>
                                        </li>
                                        <li className={className('userInfo-item')}>
                                            <NavLink to="/setting" className={className('userInfo-link')}>账户设置</NavLink>
                                        </li>
                                        <li className={className('userInfo-item')}>
                                            <a href="javascript:;" onClick={this.handleLogout} className={className('userInfo-link')}>退出登录</a>
                                        </li>
                                    </ul>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    ) : null
                }
            </React.Fragment>
        );
    }
}

export default User;
