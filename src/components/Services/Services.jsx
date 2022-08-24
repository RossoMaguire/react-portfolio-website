import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDetails from './ServiceDetails';
import ServiceImage from './ServiceImage';
import { servicesData } from '../../content/data';

const Services = () => {
  return (
    <section id="services">
      <Container>
        {servicesData.map((service, index) => {
          const { title, paragraphOne, paragraphTwo, image } = service;
          return (
            <Row className="services-wrapper">
              {index % 2 === 0 ? (
                <>
                  <ServiceImage title={title} image={image} index={index} />
                  <ServiceDetails
                    title={title}
                    paragraphOne={paragraphOne}
                    paragraphTwo={paragraphTwo}
                    index={index}
                  />
                </>
              ) : (
                <>
                  <ServiceDetails
                    title={title}
                    paragraphOne={paragraphOne}
                    paragraphTwo={paragraphTwo}
                    index={index}
                  />
                  <ServiceImage title={title} image={image} index={index} />
                </>
              )}
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Services;
