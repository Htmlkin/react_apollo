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
