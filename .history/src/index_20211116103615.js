import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../src/components/app';
import './index.css';

const app = (
    <>
        <App />
    </>
);
ReactDOM.render(app, document.getElementById('wrapper'));
