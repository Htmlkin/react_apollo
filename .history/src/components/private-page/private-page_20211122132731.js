import React from 'react';
import './private-page.css';

import AllFilms from './films/AllFilms';

const PrivatePage = () => {
    return (
        <main id='privateContent'>
            <section id='all_films'>
                <AllFilms />
            </section>
        </main>
    );
};

export default PrivatePage;
