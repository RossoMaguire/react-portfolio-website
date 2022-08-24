import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Col } from 'react-bootstrap';

const ServiceDetails = ({ title, paragraphOne, paragraphTwo, index }) => {
  return (
    <Col
      md={index % 2 === 0 ? 6 : { span: 6, order: 'first' }}
      sm={index % 2 === 0 ? 12 : null}
      xs={index % 2 === 0 ? null : { span: 12, order: 'last' }}
    >
      <Fade left duration={1000} delay={1000} distance="30px">
        <div className="services-wrapper__text">
          <h3 className="services-wrapper__text-title">{title || 'Project Title'}</h3>
          <p className="services-wrapper__info-text">{paragraphOne}</p>
          <p className="services-wrapper__info-text">{paragraphTwo}</p>
        </div>
      </Fade>
    </Col>
  );
};

ServiceDetails.propTypes = {
  title: PropTypes.string,
  paragraphOne: PropTypes.string,
  paragraphTwo: PropTypes.string,
  index: PropTypes.number,
};

export default ServiceDetails;
