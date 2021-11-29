import React from 'react';
import './private-page.css';
import { useQuery, gql } from '@apollo/client';

const GET_ROCKET_NAMES = gql`
    {
        rockets {
            id
            name
        }
    }
`;

const PrivatePage = () => {
    const { data } = useQuery(GET_ROCKET_NAMES);

    if (error)
        return (
            <main id='privateContent'>
                <section>
                    <h1>This Is Private Zone</h1>

                    <div>{data.name}</div>
                </section>
            </main>
        );
};

export default PrivatePage;
