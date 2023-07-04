//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import logger from 'redux-logger';
// import reducer from "./redux/reducers";
import { Provider } from 'react-redux';
// const store = createStore(reducer, applyMiddleware(logger));
import accountReducer from "./slices/accountSlice";
import { adminApi } from './api/adminSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
  reducer:{account:accountReducer,[adminApi.reducerPath]:adminApi.reducer},
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(adminApi.middleware),
  
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
      
    
  </React.StrictMode>
);

reportWebVitals();
