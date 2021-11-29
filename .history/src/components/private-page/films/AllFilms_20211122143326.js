import React from 'react';
import './AllFilms.css';

import Film from '../film/Film';

const AllFilms = ({ AllFilms }) =>
    AllFilms.films.map((films) => (
        <Film key={films.id} title={films.title} director={films.director} />
    ));

export default AllFilms;
