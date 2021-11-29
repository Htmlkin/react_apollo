import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Spinner from 'components/spinner/Spinner';

import SingleFilm from './SingleFilm';

const GET_FILM = gql`
    query Query($id: ID) {
        film(id: $id) {
            id
            director
            title
        }
    }
`;

const FilmPage = (props) => {
    const id = props.match.params.id;

    const { loading, error, data } = useQuery(GET_FILM, { variables: { id } });

    console.log(data);

    if (loading) return <Spinner />;

    if (error) return <h3>ERROR</h3>;

    return (
        <div>
            <SingleFilm film={data.film} />
        </div>
    );
};

export default FilmPage;
