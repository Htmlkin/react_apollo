import React from 'react';
import './AllFilms.css';

import Film from '../film/Film';

const AllFilms = ({ films }) => films.map((film) => <Film key={film.id} />);

export default AllFilms;
