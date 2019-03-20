import { combineReducers } from 'redux-immutablejs';
import { routerReducer } from 'react-router-redux';
import tags from './tags';
import articles from './articles';
import users from './users';

export default combineReducers({
    tags,
    articles,
    users,
    routing: routerReducer
});
