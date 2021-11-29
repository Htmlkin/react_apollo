import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from '../src/components/app';
import './index.css';
import './firebase';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from '@apollo/client';

// const client = new ApolloClient({
//     url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
//     cache: new InMemoryCache(),
// });

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
            query GetRates {
                rates(currency: "USD") {
                    currency
                }
            }
        `,
    })
    .then((result) => console.log(result));

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
