import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import configureStore from './app/configureStore';
import './index.css';

const store = configureStore();
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);

registerServiceWorker();
