import React from 'react';
import './AllFilms.css';
import SingleFilm from '../film/SingleFilm';

const AllFilms = ({ films }) => {
    return (
        <div>
            {films.map((film) => (
                <div key={film.id}>
                    <SingleFilm film={film} />
                </div>
            ))}
        </div>
    );
};

export default AllFilms;
