import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, PrivatePage, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                PrivatePage ? (
                    <Component {...rest} />
                ) : (
                    <Redirect push to='/login' />
                )
            }
        />
    );
};

export default PrivateRoute;
