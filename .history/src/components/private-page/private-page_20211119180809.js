import React from 'react';
import './private-page.css';

const PrivatePage = () => {
    fetch('https://api.spacex.land/graphql/').then((res) => {
        console.log('Got Response', res.status);
    });

    return (
        <main id='privateContent'>
            <section>
                <h1>This Is Private Zone</h1>
            </section>
        </main>
    );
};

export default PrivatePage;
