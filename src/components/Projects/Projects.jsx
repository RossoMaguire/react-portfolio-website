/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import MoreProjects from './MoreProjects';
import ProjectImage from './ProjectImage';
import ProjectDetails from './ProjectDetails';
import { projectsData } from '../../content/data';

const Projects = () => {
  const [moreProjects, setMoreProjects] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('section')) projectsRef.current.scrollIntoView();
  }, []);

  return (
    <section id="projects" ref={projectsRef}>
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projectsData.map((project) => {
            const { title, label, label2, info, info2, url, url2, repo, img, id } = project;
            return (
              <Row key={`project-${id}`}>
                <Col lg={4} sm={12}>
                  <ProjectDetails
                    title={title}
                    info={info}
                    info2={info2}
                    label={label}
                    url={url}
                    url2={url2}
                    label2={label2}
                    repo={repo}
                  />
                </Col>
                <Col lg={8} sm={12}>
                  <ProjectImage url={url} title={title} img={img} />
                </Col>
              </Row>
            );
          })}
          {!moreProjects && (
            <Row>
              <span
                className="cta-btn text-color-main more-projects-btn"
                aria-hidden="true"
                onClick={() => setMoreProjects(true)}
              >
                View more projects <i className="fa fa-arrow-right" />
              </span>
            </Row>
          )}
          {moreProjects && <MoreProjects />}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
