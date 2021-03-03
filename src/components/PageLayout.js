import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';

const Content = styled.main`
  max-width: 1000px;
  margin: 30px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans';

  h1 {
    font-family: 'Open Sans';
  }
`;

export function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <Content>{children}</Content>
    </>
  );
}
