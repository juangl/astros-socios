import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { withCookies } from '../core/cookies';

let PrivateRoute = ({ component, cookies, ...rest }) => (
  <Route
    {...rest}
    render={props =>
     cookies.token 
        ? React.createElement(component, props)
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />}
  />
);

PrivateRoute = withCookies(PrivateRoute);

export default PrivateRoute;
