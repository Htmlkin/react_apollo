import React from 'react';
import Spinner from './../spinner/Spinner';
import './private-page.css';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
    query Query {
        allFilms {
            films {
                title
            }
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

    return data.rates.map(({ currency, rate }) => (
        <main id='privateContent'>
            <section>
                <div key={currency}>
                    <p>
                        {currency}: {rate}
                    </p>
                </div>
            </section>
        </main>
    ));
};

export default PrivatePage;
