import React from 'react';
import './AllFilms.sass';
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
        <div key={id}>
            <p>
                {director} : {title}{' '}
            </p>
        </div>
    ));
};

export default AllFilms;
