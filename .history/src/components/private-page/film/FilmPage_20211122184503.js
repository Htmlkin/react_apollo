import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Spinner from 'components/spinner/Spinner';

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

    // console.log(id);

    const { loading, error, data } = useQuery(GET_FILM, { variables: { id } });

    // console.log(data.films);

    if (loading) return <Spinner />;

    if (error) return <h3>ERROR</h3>;

    return (
        <div>
            {/* <SingleFilm film={data.films} /> */}
            <h1>Hello</h1>
        </div>
    );
};

export default FilmPage;
