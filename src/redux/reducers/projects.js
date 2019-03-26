import * as projectActionTypes from '../constants/projects';
import Immutable, { List } from 'immutable';

const initialState = Immutable.fromJS({
    loading: true,
    error: false,
    list: []
});

export default (state = initialState, action) => {
    let response = action && action.result ? action.result.response : null;

    switch (action.type) {
        // 获取列表
        case projectActionTypes.FETCH_PROJECTS_REQUEST:
            return state.set('loading', true);
        case projectActionTypes.FETCH_PROJECTS_ERROR:
            return state.set('error', true);
        case projectActionTypes.FETCH_PROJECTS_SUCCESS:
            return state.set('loading', false).set('list', List(response));
        // 创建信息
        case projectActionTypes.CREATE_PROJECT_SUCCESS:
            return state
                .set('loading', false)
                .update('list', (list) => list.unshift(response));
        // 编辑
        case projectActionTypes.EDIT_PROJECT_SUCCESS:
            const editIndex = state.get('list').findIndex((item) => {
                return item.id === response.id;
            });
            return state
                .set('submitting', false)
                .update('list', (list) => list.set(editIndex, response));
        // 删除
        case projectActionTypes.REMOVE_PROJECT_SUCCESS:
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
