import 'bootstrap/dist/css/bootstrap.min.css';
 import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {store} from '../src/store/store'; 
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <StrictMode>
  <Provider store={store}>
  
    <App />
  
  </Provider> 
 </StrictMode>
);

