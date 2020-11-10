import * as bestwishsActionTypes from "../constants/bestwishs";
import bestwishsApi from "@api/bestwishs";

export const fetch = () => {
  return {
    types: [
      bestwishsActionTypes.FETCH_BESTWISHS_REQUEST,
      bestwishsActionTypes.FETCH_BESTWISHS_SUCCESS,
      bestwishsActionTypes.FETCH_BESTWISHS_ERROR,
    ],
    promise: () => {
      return bestwishsApi.fetch();
    },
  };
};

export const create = (data, callback) => {
  return {
    types: [
      bestwishsActionTypes.CREATE_BESTWISH_REQUEST,
      bestwishsActionTypes.CREATE_BESTWISH_SUCCESS,
      bestwishsActionTypes.CREATE_BESTWISH_ERROR,
    ],
    promise: () => {
      return bestwishsApi.create(data);
    },
    callback,
  };
};

export const edit = (id, data, callback) => {
  return {
    types: [
      bestwishsActionTypes.EDIT_BESTWISH_REQUEST,
      bestwishsActionTypes.EDIT_BESTWISH_SUCCESS,
      bestwishsActionTypes.EDIT_BESTWISH_ERROR,
    ],
    promise: () => {
      return bestwishsApi.edit(id, data);
    },
    callback,
  };
};

export const remove = (id, callback) => {
  return {
    types: [
      bestwishsActionTypes.REMOVE_BESTWISH_REQUEST,
      bestwishsActionTypes.REMOVE_BESTWISH_SUCCESS,
      bestwishsActionTypes.REMOVE_BESTWISH_ERROR,
    ],
    promise: () => {
      return bestwishsApi.remove(id);
    },
    callback,
  };
};
