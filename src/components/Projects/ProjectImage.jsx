import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import ProjectThumb from '../Image/ProjectThumb';

const ProjectImage = ({ url, title, img }) => {
  return (
    <Fade right duration={1000} delay={1000} distance="30px">
      <div className="project-wrapper__image">
        <a href={url || '#!'} target="_blank" aria-label="Project Link" rel="noopener noreferrer">
          <Tilt
            options={{
              reverse: false,
              max: 8,
              perspective: 1000,
              scale: 1,
              speed: 300,
              transition: true,
              axis: null,
              reset: true,
              easing: 'cubic-bezier(.03,.98,.52,.99)',
            }}
          >
            <div data-tilt className="thumbnail rounded">
              <ProjectThumb alt={title} filename={img} />
            </div>
          </Tilt>
        </a>
      </div>
    </Fade>
  );
};

ProjectImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};

export default ProjectImage;
