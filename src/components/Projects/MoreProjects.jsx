/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectImage from './ProjectImage';
import ProjectDetails from './ProjectDetails';
import { moreProjectsData } from '../../content/data';

const MoreProjects = () => {
  return moreProjectsData.map((project) => {
    const { title, label, label2, info, info2, url, url2, repo, img, id } = project;
    return (
      <Row key={`more-project-${id}`}>
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
  });
};

export default MoreProjects;
