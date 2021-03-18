import React, { useContext, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = (props) => {
  const { location } = props;

  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return location.pathname === '/' ? (
    <section id="hero" className="jumbotron home-hero">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}
            <span className="text-color-main">{name || ' Ross'}</span>
            <br />
            {subtitle || "I'm a Frontend Web Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  ) : (
    <section id="hero" className="jumbotron services-hero">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'My'}
            <span className="text-color-main">{name || ' Services'}</span>
            <br />
            {subtitle || 'How can I help?'}
          </h1>
        </Fade>
      </Container>
    </section>
  );
};

Header.propTypes = {
  location: PropTypes.string,
};

export default Header;
