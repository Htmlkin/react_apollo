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
    const { loading, error, data } = useQuery(ALL_FILMS);

    if (loading) return <Spinner />;

    if (error) return <h3>ERROR</h3>;

    return data.allFilms.films.map(({ director, title, id }) => (
        <div className='film_block' key={id}>
            <div className='id'>{id}</div>

            <div>
                {' '}
                Director: <span className='ttl'> {director}</span>{' '}
            </div>
            <div>
                Title: <span className='ttl'> {title}</span>
            </div>
        </div>
    ));
};

export default AllFilms;
