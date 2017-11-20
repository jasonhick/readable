import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import readableApp from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(logger, thunk));
const configureStore = () => {
  const store = createStore(
    readableApp,
    enhancer,
  );
  return store;
};

export default configureStore;
