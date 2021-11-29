import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'hooks/use-auth';

const PrivateRoute = ({ component: Component, PrivatePage, ...rest }) => {
    const { isAuth } = useAuth();
    return isAuth ? (
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
    ) : (
        <Route {...rest} render={(props) => <Component {...rest} />} />
    );
};

export default PrivateRoute;
