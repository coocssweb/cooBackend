import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Layout from '@containers/layout';
import Login from '@containers/login';

export default function () {
    // 入口函数组件
    const Entry = () => {
        return (
            <Switch>
                <Route path="/main" component={Layout} />
                <Route path="/login" component={Login} exact />
            </Switch>
        );
    };

    return (
        <Router history={history}>
            <Route component={Entry}>
            </Route>
        </Router>
    );
};
