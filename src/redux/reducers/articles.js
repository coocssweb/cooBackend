import * as articleActionTypes from '../constants/articles';
import Immutable, { List } from 'immutable';

const initialState = Immutable.fromJS({
    loading: true,
    error: false,
    tag: null,
    list: []
});

export default (state = initialState, action) => {
    let response = action && action.result ? action.result.response : null;

    switch (action.type) {
        // 获取列表
        case articleActionTypes.FETCH_ARTICLES_REQUEST:
            return state.set('loading', true);
        case articleActionTypes.FETCH_ARTICLES_ERROR:
            return state.set('error', true);
        case articleActionTypes.FETCH_ARTICLES_SUCCESS:
            return state.set('loading', false).set('list', List(response));
        // 创建信息
        case articleActionTypes.CREATE_ARTICLE_SUCCESS:
            return state
                .set('loading', false)
                .update('list', (list) => list.unshift(response));
        // 编辑文章
        case articleActionTypes.EDIT_ARTICLE_SUCCESS:
            const editIndex = state.get('list').findIndex((item) => {
                return item.id === response.id;
            });
            return state
                .set('submitting', false)
                .update('list', (list) => list.set(editIndex, response));
        // 删除文章
        case articleActionTypes.REMOVE_ARTICLE_SUCCESS:
            const removeIndex = state.get('list').findIndex((item) => {
                return item.id === response.id;
            });
            return state
                .set('submitting', false)
                .update('list', (list) => list.delete(removeIndex));
        // 清除列表信息
        case articleActionTypes.CLEAR_ARTICLES:
            return state.set('list', []).set('tag', null).set('loading', true);

        default:
            return state;
    }
};
