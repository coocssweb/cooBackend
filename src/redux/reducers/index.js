import { combineReducers } from 'redux-immutablejs';
import tags from './tags';
import articles from './articles';
import users from './users';

export default combineReducers({
    tags,
    articles,
    users
});
