import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import React provider and the store that we made to allow us to use redux as global state management
import { Provider } from 'react-redux';
import store from './store/store';

import "./css/styles.css";


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
