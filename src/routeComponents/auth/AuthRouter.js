import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';

function AuthRouter(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${props.match.path}/signup`} component={SignUp} />
        <Route path={`${props.match.path}/login`} component={Login} />
      </Switch>
    </React.Fragment>
  );
}

export default AuthRouter;
