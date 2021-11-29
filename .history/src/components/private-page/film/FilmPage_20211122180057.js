import React from 'react';

const FilmPage = (props) => {
    return (
        <div>
            <p>{props.match.params.id}</p>
        </div>
    );
};

export default FilmPage;
