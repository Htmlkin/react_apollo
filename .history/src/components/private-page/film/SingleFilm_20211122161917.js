import React from 'react';

const SingleFilm = ({ film }) => {
    <div className='film_block' key={film.id}>
        <div className='id'>ID: {film.id}</div>

        <div>
            {' '}
            Director: <span className='ttl'> {film.director}</span>{' '}
        </div>
        <div>
            Title: <span className='ttl'> {film.title}</span>
        </div>
    </div>;
};

export default SingleFilm;
