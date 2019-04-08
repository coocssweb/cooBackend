import * as demoActionTypes from '../constants/demos';
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
        case demoActionTypes.FETCH_DEMOS_REQUEST:
            return state.set('loading', true);
        case demoActionTypes.FETCH_DEMOS_ERROR:
            return state.set('error', true);
        case demoActionTypes.FETCH_DEMOS_SUCCESS:
            return state.set('loading', false).set('list', List(response));
        // 创建信息
        case demoActionTypes.CREATE_DEMO_SUCCESS:
            return state
                .set('loading', false)
                .update('list', (list) => list.unshift(response));
        // 编辑
        case demoActionTypes.EDIT_DEMO_SUCCESS:
            const editIndex = state.get('list').findIndex((item) => {
                return item.id === response.id;
            });
            return state
                .set('submitting', false)
                .update('list', (list) => list.set(editIndex, response));
        // 删除
        case demoActionTypes.REMOVE_DEMO_SUCCESS:
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
