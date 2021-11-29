import React from 'react';
// import { Link } from 'react-router-dom';

const SingleFilm = ({ film }) => {
    return (
        <div className='film_block' key={film.episodeID}>
            <div className='id'>ID: {film.episodeID}</div>

            <div>
                {' '}
                Director: <span className='ttl'> {film.director}</span>{' '}
            </div>
            <div>
                Title: <span className='ttl'> {film.title}</span>
            </div>

            {/* <Link to={`/films/id:${film.id}`}>More</Link> */}
        </div>
    );
};

export default SingleFilm;
