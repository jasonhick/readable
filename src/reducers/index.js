import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import comments from './comments';
import sorting from './sorting';

const readableApp = combineReducers({
  categories,
  posts,
  comments,
  sorting,
});

export default readableApp;
