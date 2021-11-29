import React from 'react';
import './private-page.css';

import AllFilms from './films/AllFilms';

const PrivatePage = () => {
    return (
        <main id='privateContent'>
            <h1>Star Wars Films</h1>

            <section id='all_films_section'>
                <AllFilms />
            </section>
        </main>
    );
};

export default PrivatePage;
