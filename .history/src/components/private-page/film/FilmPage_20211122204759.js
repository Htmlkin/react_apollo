import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Spinner from 'components/spinner/Spinner';

import SingleFilm from './SingleFilm';

const GET_FILM = gql`
    query Query($filmId: ID) {
        film(id: $filmId) {
            id
            director
            title
            producers
            releaseDate
        }
    }
`;

const FilmPage = (props) => {
    const filmId = props.match.params.id;

    const { loading, error, data } = useQuery(GET_FILM, {
        variables: { filmId },
    });

    console.log(data);

    if (loading) return <Spinner />;

    if (error) return <h3>ERROR</h3>;

    return (
        <div>
            {/* <SingleFilm film={data.film} /> */}
            <div className='div'>{data.title}</div>
        </div>
    );
};

export default FilmPage;
