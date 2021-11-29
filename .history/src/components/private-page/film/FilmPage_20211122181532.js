import React from 'react';

const FilmPage = (props) => {
    console.log(props);
    return (
        <div>
            <p>{props.match.params.title}</p>
        </div>
    );
};

export default FilmPage;
