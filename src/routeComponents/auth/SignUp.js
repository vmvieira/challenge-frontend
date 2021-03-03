import React, { useState } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import api from '../../API/api';
import { PageLayout } from '../../components/PageLayout';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import styled from 'styled-components';

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
  padding: 10px 20px;
  color: ${(p) =>
    p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  border: 1px solid
    ${(p) => (p.secondary ? p.theme.primaryColor : p.theme.secondaryColor)};
  font-weight: bold;
  text-decoration: none;
  border-radius: 24px;
  display: block;
  text-align: center;
  transition: all 0.2s ease;
  margin: 10px 0;
  &:hover {
    opacity: 0.7;
  }
`;

function Signup(props) {
  const [state, setState] = useState({ name: '', password: '', email: '' });
  const [errors, setErrors] = useState({
    name: null,
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
      const response = await api.post('/signup', state);
      setErrors({ name: '', password: '', email: '' });
      console.log(response);
      props.history.push('/auth/login');
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <PageLayout>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up !</h1>

        <div>
          <label htmlFor='signupFormName'>Name</label>
          <Input
            type='text'
            name='name'
            id='signupFormName'
            placeholder='User Name'
            value={state.name}
            error={errors.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='signupFormEmail'>E-mail Address</label>
          <Input
            type='email'
            name='email'
            id='signupFormEmail'
            placeholder='Your Email'
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
            placeholder='Define a Password'
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <Button type='submit'>Sign up !</Button>

          <StyledLink secondary={+true} to='/auth/login'>
            Already have an account ? Log in!
          </StyledLink>
        </div>
      </Form>
    </PageLayout>
  );
}

export default Signup;
