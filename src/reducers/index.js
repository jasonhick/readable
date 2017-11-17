import { combineReducers } from 'redux';
import posts from './posts';

const readableApp = combineReducers({
  posts,
});

export default readableApp;
