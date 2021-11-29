import React from 'react';
// import { Link } from 'react-router-dom';

const SingleFilm = ({ film }) => {
    return (
        <div className='film_block' key={film.id}>
            <div className='id'>ID: {film.id}</div>

            <p>
                Title: <span className='ttl'> {film.title}</span>
            </p>
            <p>
                Director: <span className='ttl'> {film.director}</span>{' '}
            </p>

            <p>
                Release Date: <span className='ttl'> {film.releaseDate}</span>{' '}
            </p>
            <p>
                <span className='explane'> {film.openingCrawl}</span>{' '}
            </p>

            {/* <Link to={`/films/id:${film.id}`}>More</Link> */}
        </div>
    );
};

export default SingleFilm;
