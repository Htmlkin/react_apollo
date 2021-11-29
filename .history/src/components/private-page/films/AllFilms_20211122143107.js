import React from 'react';
import './AllFilms.css';

import Film from '../film/Film';

const AllFilms = ({ AllFilms }) =>
    AllFilms.films.map((films) => (
        <Film
            key={AllFilms.films.id}
            title={AllFilms.films.title}
            director={AllFilms.films.director}
        />
    ));

export default AllFilms;
