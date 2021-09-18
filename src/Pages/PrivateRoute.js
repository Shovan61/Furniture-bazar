import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth0();
    return (
        <Route
            {...rest}
            render={() => {
                return user ? children : <Redirect to='/'></Redirect>;
            }}></Route>
    );
};

export default PrivateRoute;
