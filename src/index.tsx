import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/style.scss';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/Store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
