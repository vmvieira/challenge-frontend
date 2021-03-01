import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../routeComponents/Home';
import AuthRouter from '../routeComponents/auth/AuthRouter';

import { AuthContextComponent } from '../contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={AuthRouter} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
