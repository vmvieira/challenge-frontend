import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { Toggle } from './Toggle';
import Logo from './Logo/Logo';
import Searchbar from './Searchbar/Searchbar';

const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;
  background-color: ${(p) => p.theme.navbarColor};
`;

const Menu = styled.nav`
  display: none;
  font-family: 'Open Sans';
  border-bottom: 3px solid ${(p) => p.theme.navbarColor};
  background: ${(p) => p.theme.navbarColor};

  @media (min-width: 768px) {
    display: flex;
    flex-shrink: 0;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`;

const BurgMenu = styled.nav`
  display: ${(p) => (p.open ? 'block' : 'none')};
  font-family: 'Open Sans';
  border-bottom: 3px solid ${(p) => p.theme.navbarColor};
  background: ${(p) => p.theme.navbarColor};
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
  margin: 0 0.5em;
  border-radius: 24px;
  display: block;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 700px) {
    margin-bottom: 15px;
  }
`;

const MobileMenuIcon = styled.div`
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background: ${(p) => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <>
      <NavWrap>
        <Logo />
        <Searchbar />
        <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
          <div />
          <div />
          <div />
        </MobileMenuIcon>
        <Menu>
          <StyledLink secondary={+true} to='/auth/login'>
            Log In
          </StyledLink>
          <StyledLink to='/auth/signup'>Sign Up</StyledLink>
          <Toggle isActive={id === 'dark'} onToggle={setTheme} />
        </Menu>
      </NavWrap>
      <BurgMenu open={menuOpen}>
        <StyledLink secondary={+true} to='/auth/login'>
          Log In
        </StyledLink>
        <StyledLink to='/auth/signup'>Sign Up</StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
      </BurgMenu>
    </>
  );
}
