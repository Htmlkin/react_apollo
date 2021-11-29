import React from 'react';
import './private-page.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    {
        allFilms {
            films {
                title
                episodeID
                director
            }
        }
    }
`;

const PrivatePage = () => {
    return (
        <main id='privateContent'>
            <section>
                <h1>This Is Private Zone</h1>

                const AllMovies = () => (
  <Query query=query>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allFilms.map(({ title, episodeId, director }) => (
        <div key={episodeId}>
          <p>{`${title}: Directed by ${director}`}</p>
        </div>
      ));
    }}
  </Query>
);

            </section>
        </main>
    );
};

export default PrivatePage;
