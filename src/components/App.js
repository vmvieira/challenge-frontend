import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../routeComponents/Home';
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';
import AuthRouter from '../routeComponents/auth/AuthRouter';
import { AuthContextComponent } from '../contexts/AuthContext';
import PrivateRoute from '../routeComponents/auth/PrivateRoute';
import SuperSecret from '../routeComponents/auth/SuperSecret';

const GlobalStyle = createGlobalStyle`
	body{
		background: ${(p) => p.theme.bodyBackgroundColor};
		min-height: 100vh;
		margin: 0;
		color: ${(p) => p.theme.bodyFontColor};
		font-family: 'Open Sans', 'sans-serif';
	}
  .pointer:hover {
  cursor: pointer;
}
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((stateTheme) =>
            stateTheme.id === 'light' ? DarkTheme : LightTheme
          );
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextComponent>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/auth' component={AuthRouter} />
            <PrivateRoute path='/secret' component={SuperSecret} />
          </Switch>
        </AuthContextComponent>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
