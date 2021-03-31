import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesImg from '../Image/ServicesImg';
import { servicesData } from '../../mock/data';

const Services = () => {
  return (
    <section id="services">
      <Container>
        {servicesData.map((service, index) => {
          const { title, paragraphOne, paragraphTwo, image } = service;
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
                <Fade left duration={1000} delay={1000} distance="30px">
                  <div className="services-wrapper__text">
                    <h3 className="services-wrapper__text-title">{title || 'Project Title'}</h3>
                    <p className="services-wrapper__info-text">{paragraphOne}</p>
                    <p className="services-wrapper__info-text">{paragraphTwo}</p>
                  </div>
                </Fade>
              </Col>
            </Row>
          ) : (
            <Row className="services-wrapper">
              <Col md={{ span: 6, order: 'first' }} xs={{ span: 12, order: 'last' }}>
                <Fade left duration={1000} delay={1000} distance="30px">
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
