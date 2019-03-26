import { combineReducers } from 'redux-immutablejs';
import { routerReducer } from 'react-router-redux';
import tags from './tags';
import articles from './articles';
import users from './users';
import projects from './projects';

export default combineReducers({
    tags,
    articles,
    users,
    projects,
    routing: routerReducer
});
