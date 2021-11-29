import React from 'react';
import './private-page.css';
import { useQuery, gql } from '@apollo/client';
import AllFilms from './films/AllFilms';
import Spinner from 'components/spinner/Spinner';

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

const PrivatePage = () => {
    const { loading, error, data } = useQuery(ALL_FILMS);

    if (loading) return <Spinner />;

    if (error) return <h3>ERROR</h3>;

    return (
        <main id='privateContent'>
            <section id='all_films_section'>
                <h1>Star Wars Films</h1>
                <AllFilms films={data.AllFilms} />
            </section>
        </main>
    );
};

export default PrivatePage;
