import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const NavBar = (props) => {
  const { location } = props;
  const { nav } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Container id="navigation-bar">
      <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <Navbar sticky="top" collapseOnSelect expand="lg" className="justify-content-end">
          <Nav>
            {nav.map((item) => {
              const { url, label, type } = item;
              if (
                type === 'jumplink' &&
                location.pathname === '/services/' &&
                label === 'Projects'
              ) {
                return (
                  <Nav.Item>
                    <Nav.Link className="cta-btn text-color-main" href="/#projects">
                      {label}
                    </Nav.Link>
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
                  <Nav.Link className="cta-btn text-color-main" href={url}>
                    {label}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar>
      </Fade>
    </Container>
  );
};

NavBar.propTypes = {
  location: PropTypes.string,
};

export default NavBar;
