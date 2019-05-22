import React from 'react';
import { Menu, Heading, Button, Icons, Anchor, RoutedAnchor, Box } from 'grommet';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const NavBar = styled(Box)`
  width: 100%;
  height: 60px;
  position: fixed;
`

const StyledNavLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
`

function Nav() {
  return(
    <NavBar direction="row" background="brand" align="center">
      <StyledNavLink to="/">
        <Anchor label="Home" />
      </StyledNavLink>
      <StyledNavLink to="/second-page">
        <Anchor label="Second Page" />
      </StyledNavLink>
    </NavBar>
  )
}

export default Nav