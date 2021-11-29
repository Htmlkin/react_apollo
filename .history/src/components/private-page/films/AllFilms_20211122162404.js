import React from 'react';
import './AllFilms.css';
import SingleFilm from '../film/SingleFilm';
import Film from '../film/Film';

const AllFilms = ({ films }) => {
    return (
        <div>
            {films.map((film) => (
                <div key={film.id}>
                    <Film film={film} />
                </div>
            ))}
        </div>
    );
};

export default AllFilms;
