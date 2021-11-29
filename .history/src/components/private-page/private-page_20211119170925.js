import React from 'react';
import './private-page.css';

const PrivatePage = () => {
    fetch('https://swapi-graphql.netlify.app/.netlify/functions/index').then(
        (res) => {
            console.log('Got Response');
        }
    );

    return (
        <main id='privateContent'>
            <section>
                <h1>This Is Private Zone</h1>
            </section>
        </main>
    );
};

export default PrivatePage;
