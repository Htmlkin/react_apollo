import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../src/components/app';
import './index.css';

const app = (
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('wrapper'));
