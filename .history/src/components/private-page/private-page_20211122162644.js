import React from 'react';
import './private-page.css';
import { useQuery, gql } from '@apollo/client';
import Spinner from 'components/spinner/Spinner';

import AllFilms from './films/AllFilms';

const ALL_FILMS = gql`
    query Query {
        allFilms {
            films {
                title
                id
                director
            }
        }
    }
`;

const { loading, error, data } = useQuery(ALL_FILMS);

if (loading) return <Spinner />;

if (error) return <h3>ERROR</h3>;

const PrivatePage = () => {
    return (
        <main id='privateContent'>
            <section id='all_films_section'>
                <h1>Star Wars Films</h1>
                <AllFilms />
            </section>
        </main>
    );
};

export default PrivatePage;
