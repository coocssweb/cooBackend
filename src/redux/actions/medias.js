import * as mediasActionTypes from "../constants/medias";
import mediaApi from "@api/medias";

export const fetch = () => {
  return {
    types: [
      mediasActionTypes.FETCH_MEDIAS_REQUEST,
      mediasActionTypes.FETCH_MEDIAS_SUCCESS,
      mediasActionTypes.FETCH_MEDIAS_ERROR,
    ],
    promise: () => {
      return mediaApi.fetch();
    },
  };
};

export const create = (data, callback) => {
  return {
    types: [
      mediasActionTypes.CREATE_MEDIA_REQUEST,
      mediasActionTypes.CREATE_MEDIA_SUCCESS,
      mediasActionTypes.CREATE_MEDIA_ERROR,
    ],
    promise: () => {
      return mediaApi.create(data);
    },
    callback,
  };
};

export const edit = (id, data, callback) => {
  return {
    types: [
      mediasActionTypes.EDIT_MEDIA_REQUEST,
      mediasActionTypes.EDIT_MEDIA_SUCCESS,
      mediasActionTypes.EDIT_MEDIA_ERROR,
    ],
    promise: () => {
      return mediaApi.edit(id, data);
    },
    callback,
  };
};

export const remove = (id, callback) => {
  return {
    types: [
      mediasActionTypes.REMOVE_MEDIA_REQUEST,
      mediasActionTypes.REMOVE_MEDIA_SUCCESS,
      mediasActionTypes.REMOVE_MEDIA_ERROR,
    ],
    promise: () => {
      return mediaApi.remove(id);
    },
    callback,
  };
};
