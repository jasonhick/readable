import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';

const readableApp = combineReducers({
  posts,
  comments,
});

export default readableApp;
