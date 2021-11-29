import React from 'react';
// import { Link } from 'react-router-dom';

const SingleFilm = ({ film }) => {
    return (
        <div className='film_block' key={film.id}>
            <div className='id'>ID: {film.id}</div>

            <div>
                Title: <span className='ttl'> {film.title}</span>
            </div>
            <div>
                Director: <span className='ttl'> {film.director}</span>{' '}
            </div>
            <div>
                Producers: <span className='ttl'> {film.producers}</span>{' '}
            </div>

            {/* <Link to={`/films/id:${film.id}`}>More</Link> */}
        </div>
    );
};

export default SingleFilm;
