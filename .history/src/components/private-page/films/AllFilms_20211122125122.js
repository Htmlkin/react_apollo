import React from 'react';
import Spinner from '../../spinner/Spinner';



const ALL_FILMS = gql`
    query Query {
        allFilms {
            films {
                title
                id
                director
            }
        }
    }
`;

const AllFilms = () => {

    const { loading, error, data } = useQuery(ALL_FILMS);

    if (loading)
    return (
       
       
                <Spinner />
       
    );

    if (error)
    return (
        <main id='privateContent'>
            <section>
                <h3>ERROR</h3>
            </section>
        </main>
    );
    
    return data.allFilms.films.map(({ director, title, id }) => (
        <div key={id}>
        <p>
            {director} : {title}{' '}
        </p>
    </div>
    )

}

export default AllFilms;
