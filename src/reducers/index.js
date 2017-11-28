import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';
import sorting from './sorting';

const readableApp = combineReducers({
  posts,
  comments,
  sorting,
});

export default readableApp;
