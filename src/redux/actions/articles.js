import * as articlesActionTypes from '../constants/articles';
import articlesApi from '@api/articles';

export const fetch = (classify) => {
    return {
        types: [articlesActionTypes.FETCH_ARTICLES_REQUEST, articlesActionTypes.FETCH_ARTICLES_SUCCESS, articlesActionTypes.FETCH_ARTICLES_ERROR],
        promise: () => {
            return articlesApi.fetch(classify);
        }
    };
};

export const create = (data, callback) => {
    return {
        types: [articlesActionTypes.CREATE_ARTICLE_REQUEST, articlesActionTypes.CREATE_ARTICLE_SUCCESS, articlesActionTypes.CREATE_ARTICLE_ERROR],
        promise: () => {
            return articlesApi.create(data);
        },
        callback
    };
};

export const edit = (id, data, callback) => {
    return {
        types: [articlesActionTypes.EDIT_ARTICLE_REQUEST, articlesActionTypes.EDIT_ARTICLE_SUCCESS, articlesActionTypes.EDIT_ARTICLE_ERROR],
        promise: () => {
            return articlesApi.edit(id, data);
        },
        callback
    };
};

export const remove = (id, callback) => {
    return {
        types: [articlesActionTypes.REMOVE_ARTICLE_REQUEST, articlesActionTypes.REMOVE_ARTICLE_SUCCESS, articlesActionTypes.REMOVE_ARTICLE_ERROR],
        promise: () => {
            return articlesApi.remove(id);
        },
        callback
    };
};

export const clear = () => {
    return {
        type: articlesActionTypes.CLEAR_ARTICLES
    };
};
