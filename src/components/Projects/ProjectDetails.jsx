import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const ProjectDetails = ({ title, info, info2, languages, label, url, url2, label2, repo }) => {
  return (
    <Fade left duration={1000} delay={500} distance="30px">
      <div className="project-wrapper__text">
        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
        <div className="project-wrapper__text-info">
          <p>{info}</p>
          <p className="mb-4">{info2 || ''}</p>
          <p style={{ float: 'right' }}>{languages}</p>
        </div>
        <div className="project-wrapper__text-buttons">
          {title === 'Social Media Management' ? (
            <>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href={url || '#!'}
              >
                {label}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero social-project-btn"
                href={url2 || '#!'}
              >
                {label2}
              </a>
            </>
          ) : (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href={url || '#!'}
            >
              {label}
            </a>
          )}
        </div>
        <div className="project-wrapper__text-buttons">
          {repo && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn text-color-main"
              href={repo}
            >
              {label2}
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
};

ProjectDetails.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  info2: PropTypes.string,
  languages: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  url2: PropTypes.string,
  label2: PropTypes.string,
  repo: PropTypes.string,
};

export default ProjectDetails;
