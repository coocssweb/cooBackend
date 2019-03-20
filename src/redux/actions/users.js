import * as usersActionTypes from '../constants/users';
import usersApi from '@api/users';

export const info = () => {
    return {
        types: [usersActionTypes.FETCH_USERINFO_REQUEST, usersActionTypes.FETCH_USERINFO_SUCCESS, usersActionTypes.FETCH_USERINFO_ERROR],
        promise: () => {
            return usersApi.info();
        }
    };
};

export const edit = (data, callback) => {
    return {
        types: [usersActionTypes.EDIT_USERINFO_REQUEST, usersActionTypes.EDIT_USERINFO_SUCCESS, usersActionTypes.EDIT_USERINFO_ERROR],
        promise: () => {
            return usersApi.edit(data);
        },
        callback
    };
};

export const updatePassword = (password, checkPassword, callback) => {
    return {
        types: [usersActionTypes.UPDATE_PASSWORD_REQUEST, usersActionTypes.UPDATE_PASSWORD_SUCCESS, usersActionTypes.UPDATE_PASSWORD_ERROR],
        promise: () => {
            return usersApi.updatePassword(password, checkPassword);
        },
        callback
    };
};

export const login = (name, password, callback) => {
    return {
        types: [usersActionTypes.LOGIN_REQUEST, usersActionTypes.LOGIN_SUCCESS, usersActionTypes.LOGIN_ERROR],
        promise: () => {
            return usersApi.login(name, password);
        },
        callback
    };
};

export const logout = (callback) => {
    return {
        types: [usersActionTypes.LOGOUT_REQUEST, usersActionTypes.LOGOUT_SUCCESS, usersActionTypes.LOGOUT_ERROR],
        promise: () => {
            return usersApi.logout();
        },
        callback
    };
};
