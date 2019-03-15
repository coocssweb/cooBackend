import * as tagsActionTypes from '../constants/tags';
import tagsApi from '@api/tags';

export const fetch = () => {
    return {
        types: [tagsActionTypes.FETCH_TAGS_REQUEST, tagsActionTypes.FETCH_TAGS_SUCCESS, tagsActionTypes.FETCH_TAGS_ERROR],
        promise: () => {
            return tagsApi.fetch();
        }
    };
};

export const create = (data) => {
    return {
        types: [tagsActionTypes.CREATE_TAG_REQUEST, tagsActionTypes.CREATE_TAG_SUCCESS, tagsActionTypes.CREATE_TAG_ERROR],
        promise: () => {
            return tagsApi.create(data);
        }
    };
};

export const edit = (id, data) => {
    return {
        types: [tagsActionTypes.EDIT_TAG_REQUEST, tagsActionTypes.EDIT_TAG_SUCCESS, tagsActionTypes.EDIT_TAG_ERROR],
        promise: () => {
            return tagsApi.edit(id, data);
        }
    };
};

export const remove = (id) => {
    return {
        types: [tagsActionTypes.REMOVE_TAG_REQUEST, tagsActionTypes.REMOVE_TAG_SUCCESS, tagsActionTypes.REMOVE_TAG_ERROR],
        promise: () => {
            return tagsApi.remove(id);
        }
    };
};
