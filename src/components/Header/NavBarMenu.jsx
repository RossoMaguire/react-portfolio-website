/* eslint-disable react/prop-types */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Navbar, Nav, Container } from 'react-bootstrap';
import checkNavItems from '../../helpers/checkNavItems';

const NavBarMenu = ({ location }) => {
  return (
    <Container id="navigation-bar">
      <Fade bottom={false} duration={1000} delay={500} distance="30px">
        <Navbar sticky="top" collapseOnSelect expand="lg" className="justify-content-end">
          <Nav>{checkNavItems(location)}</Nav>
        </Navbar>
      </Fade>
    </Container>
  );
};

export default NavBarMenu;
