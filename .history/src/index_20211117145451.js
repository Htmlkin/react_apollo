import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../src/components/app';
import './index.css';
import { store } from 'store';

const app = (
    <BrowserRouter>
        <Provider store{store}>
            <App />
        </Provider>
    </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('wrapper'));
