import React from 'react';
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

const Film = () => {
    const { loading, error, data } = useQuery(ALL_FILMS);

    if (loading) return <Spinner />;

    if (error) return <h3>ERROR</h3>;

    return (
        <div className='film_block' key={data.id}>
            <div className='id'>ID: {data.id}</div>

            <div>
                {' '}
                Director: <span className='ttl'> {data.director}</span>{' '}
            </div>
            <div>
                Title: <span className='ttl'> {data.title}</span>
            </div>
        </div>
    );
};

export default Film;
