import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/components/app';
import './index.css';

const app = (
    <>
        <App />
    </>
);
ReactDOM.render(app, document.getElementById('wrapper'));
