import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './app/configureStore';
import Root from './app/Root';
import './index.css';

const store = configureStore();
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);

registerServiceWorker();
