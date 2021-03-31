import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import Clients from './Clients';
import Testimonials from './Testimonials';
import { contactData } from '../../mock/data';

const Contact = () => {
  const { cta, btn, email } = contactData;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/RossoMaguire'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
          <Clients />
        </Fade>
        <Fade left duration={1000} delay={800} distance="30px">
          <Testimonials />
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
