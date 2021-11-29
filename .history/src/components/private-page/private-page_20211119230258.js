import React from 'react';
import './private-page.css';
import { useQuery, gql } from '@apollo/client';

const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary
        }
    }
`;

const PrivatePage = () => {
    const { data, error, loading } = useQuery(GET_COMPANY_INFO);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error</p>;

    return (
        <main id='privateContent'>
            <section>
                <h1>This Is Private Zone</h1>

                <div>{data}</div>
            </section>
        </main>
    );
};

export default PrivatePage;
