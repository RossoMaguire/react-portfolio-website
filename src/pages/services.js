import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import '../style/main.scss';
import { headData } from '../mock/data';
import App from '../components/App';
import OgImage from '../images/rm-logo.png';

const ServicesPage = (props) => {
  const { services } = headData;
  const { location } = props;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{services.title}</title>
        <html lang={services.lang || 'en'} />
        <meta name="description" content={services.description} />

        <meta property="og:title" content={services.title} />
        <meta property="og:description" content={services.description} />
        <meta property="og:image" content={OgImage} />
      </Helmet>
      <App location={location} />
    </>
  );
};

ServicesPage.propTypes = {
  location: PropTypes.string,
};

export default ServicesPage;
