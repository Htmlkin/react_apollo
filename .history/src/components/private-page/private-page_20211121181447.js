import React from 'react';
import Spinner from './../spinner/Spinner';
import './private-page.css';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

const PrivatePage = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading)
        return (
            <main id='privateContent'>
                <section>
                    <Spinner />
                </section>
            </main>
        );

    if (error)
        return (
            <main id='privateContent'>
                <section>
                    <h3>ERROR</h3>
                </section>
            </main>
        );

    return data.films.title.map(({ title }) => (
        <main id='privateContent'>
            <section>
                <h1>This Is Private Zone</h1>

                <div key={title}>{title}</div>
            </section>
        </main>
    ));
};

export default PrivatePage;
