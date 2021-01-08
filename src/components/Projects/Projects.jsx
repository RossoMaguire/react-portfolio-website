import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { concat } from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const LIMIT = 4;

  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [moreProjects, setMoreProjects] = useState(true);
  const [list, setList] = useState(projects.slice(0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const arrow = moreProjects ? 'fa fa-arrow-right' : 'fa fa-arrow-down';

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  const loadMoreProjects = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < projects.length - 1;
    const newList = concat(list, projects.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setMoreProjects(newShowMore);
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {list.map((project) => {
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
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
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
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
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
            );
          })}
          {moreProjects && (
            <Row>
              <span
                onClick={loadMoreProjects}
                className="cta-btn text-color-main more-projects-btn"
                aria-hidden="true"
              >
                View more projects <i className={arrow} />
              </span>
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
