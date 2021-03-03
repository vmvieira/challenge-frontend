import React, { useState, useContext } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import api from '../../API/api';
import { PageLayout } from '../../components/PageLayout';
import { Input } from '../../components/Input';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { AuthContext } from '../../contexts/AuthContext';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
  font-size: 14px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Input} {
    margin-top: 20px;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 0.5em 3em;
  color: ${(p) =>
    p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  border: 1px solid
    ${(p) => (p.secondary ? p.theme.primaryColor : p.theme.secondaryColor)};
  font-weight: bold;
  text-decoration: none;
  margin: 1em 0.5em;
  border-radius: 24px;
  display: block;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: '', email: '' });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('/login', state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: '', email: '' });
      props.history.push('/secret');
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <PageLayout>
      <Form onSubmit={handleSubmit}>
        <h1>Log in !</h1>

        <div>
          <label htmlFor='signupFormEmail'>E-mail Address</label>
          <Input
            type='email'
            name='email'
            id='signupFormEmail'
            value={state.email}
            error={errors.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='signupFormPassword'>Password</label>
          <Input
            type='password'
            name='password'
            id='signupFormPassword'
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <Button secondary type='submit'>
            Log in !
          </Button>

          <StyledLink to='/auth/signup'>
            Don't have an account? Sign up!
          </StyledLink>
        </div>
      </Form>
    </PageLayout>
  );
}

export default Login;
