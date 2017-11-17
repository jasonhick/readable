import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import readableApp from '../reducers';
import { getAllPosts } from '../actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(logger, thunk));
const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    readableApp,
    persistedState,
    enhancer,
  );

  store.dispatch(getAllPosts());

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000));

  return store;
};

export default configureStore;
