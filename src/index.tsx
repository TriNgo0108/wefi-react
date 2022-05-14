import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { saveState } from 'app/localStorage';
import throttle from 'lodash.throttle';
import { CookiesProvider } from 'react-cookie';
store.subscribe(throttle(()=>{
  saveState(store.getState());
},1000));
ReactDOM.render(
  <React.StrictMode>
      <CookiesProvider>
        <Provider store={store}>
          <App/>
        </Provider>
      </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
