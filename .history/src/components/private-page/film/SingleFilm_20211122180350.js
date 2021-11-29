import React from 'react';
import FilmPage from './FilmPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const SingleFilm = ({ film }) => {
    return (
        <div className='film_block' key={film.id}>
            <div className='id'>ID: {film.id}</div>

            <div>
                {' '}
                Director: <span className='ttl'> {film.director}</span>{' '}
            </div>
            <div>
                Title: <span className='ttl'> {film.title}</span>
            </div>
            <Route path='/films/:id' component={FilmPage} />
        </div>
    );
};

export default SingleFilm;
