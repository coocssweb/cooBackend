import * as tagActionTypes from '../constants/tags';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    loading: true,
    error: false,
    list: []
});

export default (state = initialState, action) => {
    switch (action.type) {
        case tagActionTypes.FETCH_TAGS_REQUEST:
            return state.set('loading', true);
        case tagActionTypes.FETCH_TAGS_ERROR:
            return state.set('error', true);
        case tagActionTypes.FETCH_TAGS_SUCCESS:
            let result = action.result.response;
            return state.merge({
                list: result,
                loading: false,
            });
        default:
            return state;
    }
};
