import * as bestwishsActionTypes from "../constants/bestwishs";
import Immutable, { List } from "immutable";

const initialState = Immutable.fromJS({
  loading: true,
  error: false,
  list: [],
});

export default (state = initialState, action) => {
  let response = action && action.result ? action.result.response : null;

  switch (action.type) {
    // 获取列表
    case bestwishsActionTypes.FETCH_BESTWISHS_REQUEST:
      return state.set("loading", true);
    case bestwishsActionTypes.FETCH_BESTWISHS_ERROR:
      return state.set("error", true);
    case bestwishsActionTypes.FETCH_BESTWISHS_SUCCESS:
      return state.set("loading", false).set("list", List(response));
    // 创建信息
    case bestwishsActionTypes.CREATE_BESTWISH_SUCCESS:
      return state
        .set("loading", false)
        .update("list", (list) => list.unshift(response));
    // 编辑标签
    case bestwishsActionTypes.EDIT_BESTWISH_SUCCESS:
      const editIndex = state.get("list").findIndex((item) => {
        return item.id === response.id;
      });
      return state
        .set("submitting", false)
        .update("list", (list) => list.set(editIndex, response));
    // 删除标签
    case bestwishsActionTypes.REMOVE_BESTWISH_SUCCESS:
      const removeIndex = state.get("list").findIndex((item) => {
        return item.id === response.id;
      });
      return state
        .set("submitting", false)
        .update("list", (list) => list.delete(removeIndex));
    default:
      return state;
  }
};
