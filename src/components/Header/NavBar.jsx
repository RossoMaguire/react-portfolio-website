/* eslint-disable react/prop-types */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as PageLink } from 'gatsby';
import { navData } from '../../mock/data';

const NavBar = ({ location }) => {
  const checkNavItems = navData.map((item) => {
    const { url, label, type } = item;
    if (type === 'jumplink' && location === 'services' && label === 'Projects') {
      return (
        <Nav.Item>
          <PageLink className="cta-btn text-color-main" to="/#projects">
            {label}
          </PageLink>
        </Nav.Item>
      );
    }
    if (type === 'jumplink') {
      return (
        <Nav.Item>
          <span className="cta-btn text-color-main">
            <Link to={url} smooth duration={1000}>
              {label}
            </Link>
          </span>
        </Nav.Item>
      );
    }

    return (
      <Nav.Item>
        <PageLink className="cta-btn text-color-main" to={url}>
          {label}
        </PageLink>
      </Nav.Item>
    );
  });

  return (
    <Container id="navigation-bar">
      <Fade bottom={false} duration={1000} delay={500} distance="30px">
        <Navbar sticky="top" collapseOnSelect expand="lg" className="justify-content-end">
          <Nav>{checkNavItems}</Nav>
        </Navbar>
      </Fade>
    </Container>
  );
};

export default NavBar;
