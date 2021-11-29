import React from 'react';
import { useQuery, gql } from '@apollo/client';

import SingleFilm from './SingleFilm';

const GET_FILM = gql`
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

const FilmPage = (props) => {
    const id = props.match.params.id;

    const { loading, error, data } = useQuery(GET_FILM, { variables: { id } });

    if (loading) return <Spinner />;

    if (error) return <h3>ERROR</h3>;

    return (
        <div>
            <p></p>
        </div>
    );
};

export default FilmPage;
