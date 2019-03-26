import * as projectsActionTypes from '../constants/projects';
import projectsApi from '@api/projects';

export const fetch = () => {
    return {
        types: [projectsActionTypes.FETCH_PROJECTS_REQUEST, projectsActionTypes.FETCH_PROJECTS_SUCCESS, projectsActionTypes.FETCH_PROJECTS_ERROR],
        promise: () => {
            return projectsApi.fetch();
        }
    };
};

export const create = (data, callback) => {
    return {
        types: [projectsActionTypes.CREATE_PROJECT_REQUEST, projectsActionTypes.CREATE_PROJECT_SUCCESS, projectsActionTypes.CREATE_PROJECT_ERROR],
        promise: () => {
            return projectsApi.create(data);
        },
        callback
    };
};

export const edit = (id, data, callback) => {
    return {
        types: [projectsActionTypes.EDIT_PROJECT_REQUEST, projectsActionTypes.EDIT_PROJECT_SUCCESS, projectsActionTypes.EDIT_PROJECT_ERROR],
        promise: () => {
            return projectsApi.edit(id, data);
        },
        callback
    };
};

export const remove = (id, callback) => {
    return {
        types: [projectsActionTypes.REMOVE_PROJECT_REQUEST, projectsActionTypes.REMOVE_PROJECT_SUCCESS, projectsActionTypes.REMOVE_PROJECT_ERROR],
        promise: () => {
            return projectsApi.remove(id);
        },
        callback
    };
};
