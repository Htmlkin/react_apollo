import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../src/components/app';
import './index.css';

const store = createStore((e) => console.log('tmp'));

const app = (
    <Provider>
        <App />
    </Provider>
);
ReactDOM.render(app, document.getElementById('wrapper'));
