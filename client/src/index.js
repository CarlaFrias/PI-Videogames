import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>  
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>
 
);

//el provider conecta a mi app de react con el store, y este utiliza el rootReducer que iniciliza el est glob
