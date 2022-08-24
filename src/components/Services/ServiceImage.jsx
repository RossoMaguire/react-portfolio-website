import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Col } from 'react-bootstrap';
import ServicesThumb from '../Image/ServicesThumb';

const ServiceImage = ({ title, image, index }) => {
  return (
    <Col
      md={index % 2 === 0 ? 6 : { span: 6, order: 'last' }}
      sm={index % 2 === 0 ? 12 : null}
      xs={index % 2 === 0 ? null : { span: 12, order: 'first' }}
    >
      <Fade bottom duration={1000} delay={600} distance="30px">
        <div className="services-wrapper__image">
          <ServicesThumb alt={title} filename={image} />
        </div>
      </Fade>
    </Col>
  );
};

ServiceImage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
};

export default ServiceImage;
