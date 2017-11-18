import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import readableApp from '../reducers';
import { getAllPosts } from '../actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(logger, thunk));
const configureStore = () => {
  const store = createStore(
    readableApp,
    enhancer,
  );
  store.dispatch(getAllPosts());
  return store;
};

export default configureStore;
