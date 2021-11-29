import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from '../src/components/app';
import './index.css';
import './firebase';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    url: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
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
