import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PageLayout } from '../../components/PageLayout';
import { AuthContext } from '../../contexts/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const authContext = useContext(AuthContext);

  return (
    <PageLayout>
      <Route
        {...rest}
        render={(routeProps) => {
          if (authContext.loggedInUser.user._id) {
            return <Component {...routeProps} {...rest} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: '/auth/login',
                  state: { from: routeProps.location },
                }}
              />
            );
          }
        }}
      />
    </PageLayout>
  );
}

export default PrivateRoute;
