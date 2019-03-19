import { combineReducers } from 'redux-immutablejs';
import tags from './tags';
import articles from './articles';

export default combineReducers({
    tags,
    articles
});
