import * as mediasActionTypes from "../constants/medias";
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
    case mediasActionTypes.FETCH_MEDIAS_REQUEST:
      return state.set("loading", true);
    case mediasActionTypes.FETCH_MEDIAS_ERROR:
      return state.set("error", true);
    case mediasActionTypes.FETCH_MEDIAS_SUCCESS:
      return state.set("loading", false).set("list", List(response));
    // 创建信息
    case mediasActionTypes.CREATE_MEDIA_SUCCESS:
      return state
        .set("loading", false)
        .update("list", (list) => list.unshift(response));
    // 编辑标签
    case mediasActionTypes.EDIT_MEDIA_SUCCESS:
      const editIndex = state.get("list").findIndex((item) => {
        return item.id === response.id;
      });
      return state
        .set("submitting", false)
        .update("list", (list) => list.set(editIndex, response));
    // 删除标签
    case mediasActionTypes.REMOVE_MEDIA_SUCCESS:
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
