import * as tagActionTypes from '../constants/tags';
import Immutable, { List } from 'immutable';

const initialState = Immutable.fromJS({
    loading: true,
    submitting: false,
    deleting: false,
    error: false,
    list: []
});

export default (state = initialState, action) => {
    let response = action && action.result ? action.result.response : null;

    switch (action.type) {
        // 获取列表
        case tagActionTypes.FETCH_TAGS_REQUEST:
            return state.set('loading', true);
        case tagActionTypes.FETCH_TAGS_ERROR:
            return state.set('error', true);
        case tagActionTypes.FETCH_TAGS_SUCCESS:
            return state.set('loading', false).set('list', List(response));
        // 创建信息
        case tagActionTypes.CREATE_TAG_REQUEST:
            return state.set('submitting', true);
        case tagActionTypes.CREATE_TAG_ERROR:
            return state.set('submitting', false);
        case tagActionTypes.CREATE_TAG_SUCCESS:
            return state
                .set('loading', false)
                .update('list', (list) => list.unshift(response));
        // 编辑标签
        case tagActionTypes.EDIT_TAG_REQUEST:
            return state.set('submitting', true);
        case tagActionTypes.EDIT_TAG_ERROR:
            return state.set('submitting', false);
        case tagActionTypes.EDIT_TAG_SUCCESS:
            const editIndex = state.get('list').findIndex((item) => {
                return item.id === response.id;
            });
            return state
                .set('submitting', false)
                .update('list', (list) => list.set(editIndex, response));

        // 删除标签
        case tagActionTypes.REMOVE_TAG_REQUEST:
            return state.set('deleting', true);
        case tagActionTypes.REMOVE_TAG_ERROR:
            return state.set('deleting', false);
        case tagActionTypes.REMOVE_TAG_SUCCESS:
            const removeIndex = state.get('list').findIndex((item) => {
                return item.id === response.id;
            });
            return state
                .set('submitting', false)
                .update('list', (list) => list.delete(removeIndex));
        default:
            return state;
    }
};
