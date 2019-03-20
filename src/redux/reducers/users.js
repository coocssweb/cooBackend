import * as userActionTypes from '../constants/users';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    info: null,
    loading: false
});

export default (state = initialState, action) => {
    let response = action && action.result ? action.result.response : null;

    switch (action.type) {
        case userActionTypes.FETCH_USERINFO_REQUEST:
            return state.set('loading', true);
        // 获取当前用户信息
        case userActionTypes.FETCH_USERINFO_SUCCESS:
            return state.set('info', response).set('loading', false);
        // 登录
        case userActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('access_token', response.access_token);
            return state;
        // 退出登录
        case userActionTypes.LOGOUT_SUCCESS:
            localStorage.removeItem('access_token');
            return state.set('info', null);
        // 修改用户信息
        case userActionTypes.EDIT_USERINFO_SUCCESS:
            return state;
        default:
            return state;
    }
};
