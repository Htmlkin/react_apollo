import React from 'react';
import Spinner from './../spinner/Spinner';
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

    console.log(data);

    if (loading)
        return (
            <main id='privateContent'>
                <section>
                    <Spinner />
                </section>
            </main>
        );

    if (error)
        return (
            <main id='privateContent'>
                <section>
                    <h3>ERROR</h3>
                </section>
            </main>
        );

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