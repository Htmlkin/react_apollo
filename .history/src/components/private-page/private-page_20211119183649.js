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
    const { data, loading, error } = useQuery(GET_ROCKET_NAMES);

    if (data) {
        console.log(data);
    } else {
        error();
    }

    return (
        <main id='privateContent'>
            <section>
                <h1>This Is Private Zone</h1>

                <div></div>
            </section>
        </main>
    );
};

export default PrivatePage;
