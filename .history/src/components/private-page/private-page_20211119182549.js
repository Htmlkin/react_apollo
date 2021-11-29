import React from 'react';
import './private-page.css';
import { gql, useQuery } from '@apollo/client';

const GET_ROCKET_NAMES = gql`
    {
        rockets {
            id
            name
        }
    }
`;

const PrivatePage = () => {
    const { data, loading, error } = useQuery(GET_ROCKET_NAMES);

    return (
        <main id='privateContent'>
            <section>
                <h1>This Is Private Zone</h1>

                <div>{data}</div>
            </section>
        </main>
    );
};

export default PrivatePage;
