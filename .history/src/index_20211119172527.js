import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-common';
import App from '../src/components/app';
import './index.css';
import './firebase';

const client = new ApolloClient({
    url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
});
const app = (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ApolloProvider>
);
ReactDOM.render(app, document.getElementById('wrapper'));
