import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../src/components/app';
import './index.css';

const app = (
    <Provider>
        <App />
    </Provider>
);
ReactDOM.render(app, document.getElementById('wrapper'));
