import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store,persistor } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react'

 
ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <span>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"/>
        <App />
      </span> 
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
  