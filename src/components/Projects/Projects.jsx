/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import MoreProjects from './MoreProjects';
import ProjectImg from '../Image/ProjectImg';
import { projectsData } from '../../mock/data';

const Projects = () => {
  const [moreProjects, setMoreProjects] = useState(false);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projectsData.map((project) => {
            const {
              title,
              label,
              label2,
              info,
              info2,
              url,
              url2,
              repo,
              img,
              id,
              languages,
            } = project;

            return (
              <>
                <Row key={id}>
                  <Col lg={4} sm={12}>
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
                  </Col>
                  <Col lg={8} sm={12}>
                    <Fade right duration={1000} delay={1000} distance="30px">
                      <div className="project-wrapper__image">
                        <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
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
                              <ProjectImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </>
            );
          })}
          {!moreProjects && (
            <>
              <Row>
                <span
                  className="cta-btn text-color-main more-projects-btn"
                  aria-hidden="true"
                  onClick={() => setMoreProjects(true)}
                >
                  View more projects <i className="fa fa-arrow-right" />
                </span>
              </Row>
            </>
          )}
          {moreProjects && <MoreProjects />}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
