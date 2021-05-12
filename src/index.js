import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import storeConfig from './Store/confirgStore';

const store =storeConfig();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


