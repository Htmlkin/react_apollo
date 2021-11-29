import React from 'react';
import './private-page.css';

import AllFilms from './films/AllFilms';

const PrivatePage = () => {
    return (
        <main id='privateContent'>
            <section id='all_films_section'>
                <h1>Star Wars Films</h1>
                <AllFilms />
            </section>
        </main>
    );
};

export default PrivatePage;
