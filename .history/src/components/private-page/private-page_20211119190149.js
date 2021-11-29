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
    const { data, error } = useQuery(GET_COMPANY_INFO);
    if (error) console.log(error);
    console.log(data);

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
