import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import settingsReducer from './features/navSettings';
import productsReducer from './features/products';
import userReducer from './features/user';
import filterReducer from "./features/filter";

import "./assets/css/styles.css"

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    products: productsReducer,
    user: userReducer,
    filter: filterReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
