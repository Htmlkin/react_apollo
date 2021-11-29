import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'hooks/use-auth';

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
