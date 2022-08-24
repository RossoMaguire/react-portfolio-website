import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { footerData } from '../../content/data';

const Footer = () => {
  const { networks } = footerData;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/RossoMaguire'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Website developed by{' '}
          <a href="https://rossmaguire.com" target="_blank" rel="noopener noreferrer">
            Ross Maguire
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
