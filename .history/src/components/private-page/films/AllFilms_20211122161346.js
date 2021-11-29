import React from 'react';
import './AllFilms.css';
import Spinner from '../../spinner/Spinner';
import { useQuery, gql } from '@apollo/client';

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

const AllFilms = () => {
    const { data, loading, error } = useQuery(ALL_FILMS);

    if (loading) return <Spinner />;

    if (error) return <h3>ERROR</h3>;

    return data.allFilms.films.map((film) => (
        <div className='film_block' key={film.id}>
            <div className='id'>ID: {film.id}</div>

            <div>
                {' '}
                Director: <span className='ttl'> {film.director}</span>{' '}
            </div>
            <div>
                Title: <span className='ttl'> {film.title}</span>
            </div>
        </div>
    ));
};

export default AllFilms;
