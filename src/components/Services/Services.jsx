import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesImg from '../Image/ServicesImg';
import PortfolioContext from '../../context/context';
import Emoji from '../Emoji/Emoji';

const Services = () => {
  const { services } = useContext(PortfolioContext);

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
    <section id="services">
      <Container>
        {services.map((service, index) => {
          const { title, paragraphOne, paragraphTwo, image, emoji } = service;
          return index % 2 === 0 ? (
            <Row className="services-wrapper">
              <Col md={6} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="services-wrapper__image">
                    <ServicesImg alt={title} filename={image} />
                  </div>
                </Fade>
              </Col>
              <Col md={6} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="services-wrapper__text">
                    <h3 className="services-wrapper__text-title">{title || 'Project Title'}</h3>
                    <p className="services-wrapper__info-text">{paragraphOne}</p>
                    <p className="services-wrapper__info-text">{paragraphTwo}</p>
                    {emoji && <Emoji symbol={emoji} />}
                  </div>
                </Fade>
              </Col>
            </Row>
          ) : (
            <Row className="services-wrapper">
              <Col md={{ span: 6, order: 'first' }} xs={{ span: 12, order: 'last' }}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="services-wrapper__text">
                    <h3 className="services-wrapper__text-title">{title || 'Project Title'}</h3>
                    <p className="services-wrapper__info-text">{paragraphOne}</p>
                    <p className="services-wrapper__info-text">{paragraphTwo}</p>
                  </div>
                </Fade>
              </Col>
              <Col md={{ span: 6, order: 'last' }} xs={{ span: 12, order: 'first' }}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="services-wrapper__image">
                    <ServicesImg alt={title} filename={image} />
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Services;
