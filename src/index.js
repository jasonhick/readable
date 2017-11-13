import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import readableApp from './reducers';
import addComment from './actions';

const store = createStore(
  readableApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addComment('HELLO WORLD!!!', 'Jason', 'Mon 13th Nov 2017'));
store.dispatch(addComment('OSCAR ROCKS :)', 'Oscar', 'Mon 13th Nov 2017'));
store.dispatch(addComment('Finish the roof', 'Simon', 'Mon 13th Nov 2017'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
