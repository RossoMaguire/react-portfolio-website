/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const SecondaryHero = ({ title, subtitle }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const splitTitle = title.split(' ');

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
    <section id="hero" className="jumbotron services-hero">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {splitTitle[0]}
            <span className="text-color-main">{splitTitle[1]}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
      </Container>
    </section>
  );
};

export default SecondaryHero;
