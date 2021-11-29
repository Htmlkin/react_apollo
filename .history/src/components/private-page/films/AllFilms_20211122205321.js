import React from 'react';
import { Link } from 'react-router-dom';
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
