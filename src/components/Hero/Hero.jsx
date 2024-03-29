import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { heroData } from '../../content/data';

const Hero = () => {
  const { title, name, subtitle, cta } = heroData;

  return (
    <section id="hero" className="jumbotron home-hero">
      <Container>
        <Fade left duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title}
            <span className="text-color-main">{name}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Hero;
