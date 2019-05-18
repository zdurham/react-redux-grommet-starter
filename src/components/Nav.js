import React from 'react';
import { Menu, Heading } from 'grommet';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

function Nav() {
  return(
    <NavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/second-page">Second Page</NavLink>
    </NavBar>
  )
}

export default Nav