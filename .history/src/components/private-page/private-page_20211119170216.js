import React from 'react';
import './private-page.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    {
        allFilms {
            films {
                title
                episodeID
                director
            }
        }
    }
`;

const PrivatePage = () => {
    return (
        <main id='privateContent'>
            <section>
                <h1>This Is Private Zone</h1>
            </section>
        </main>
    );
};

export default PrivatePage;
