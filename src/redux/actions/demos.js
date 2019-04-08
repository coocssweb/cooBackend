import * as demosActionTypes from '../constants/demos';
import demosApi from '@api/demos';

export const fetch = () => {
    return {
        types: [demosActionTypes.FETCH_DEMOS_REQUEST, demosActionTypes.FETCH_DEMOS_SUCCESS, demosActionTypes.FETCH_DEMOS_ERROR],
        promise: () => {
            return demosApi.fetch();
        }
    };
};

export const create = (data, callback) => {
    return {
        types: [demosActionTypes.CREATE_DEMO_REQUEST, demosActionTypes.CREATE_DEMO_SUCCESS, demosActionTypes.CREATE_DEMO_ERROR],
        promise: () => {
            return demosApi.create(data);
        },
        callback
    };
};

export const edit = (id, data, callback) => {
    return {
        types: [demosActionTypes.EDIT_DEMO_REQUEST, demosActionTypes.EDIT_DEMO_SUCCESS, demosActionTypes.EDIT_DEMO_ERROR],
        promise: () => {
            return demosApi.edit(id, data);
        },
        callback
    };
};

export const remove = (id, callback) => {
    return {
        types: [demosActionTypes.REMOVE_DEMO_REQUEST, demosActionTypes.REMOVE_DEMO_SUCCESS, demosActionTypes.REMOVE_DEMO_ERROR],
        promise: () => {
            return demosApi.remove(id);
        },
        callback
    };
};
