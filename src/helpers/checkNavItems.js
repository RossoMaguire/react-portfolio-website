import React from 'react';
import { Link } from 'react-scroll';
import { Link as PageLink } from 'gatsby';
import { Nav } from 'react-bootstrap';
import { navData } from '../content/data';

const checkNavItems = (location) =>
  navData.map((item) => {
    const { type, url, label } = item;
    let itemToReturn;

    if (type === 'jumplink' && location === '/services' && label === 'Projects') {
      itemToReturn = (
        <Nav.Item key={label}>
          <PageLink className="cta-btn text-color-main" to="/?section=projects">
            {label}
          </PageLink>
        </Nav.Item>
      );
    } else if (type === 'jumplink') {
      itemToReturn = (
        <Nav.Item key={label}>
          <span className="cta-btn text-color-main">
            <Link to={url} smooth duration={1000}>
              {label}
            </Link>
          </span>
        </Nav.Item>
      );
    } else {
      itemToReturn = (
        <Nav.Item key={label}>
          <PageLink className="cta-btn text-color-main" to={url}>
            {label}
          </PageLink>
        </Nav.Item>
      );
    }

    return itemToReturn;
  });

export default checkNavItems;
