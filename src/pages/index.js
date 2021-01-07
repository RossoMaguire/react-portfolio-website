import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const HomePage = (props) => {
  const { index } = headData;
  const { location } = props;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{index.title}</title>
        <html lang={index.lang || 'en'} />
        <meta name="description" content={index.description} />
      </Helmet>
      <App location={location} />
    </>
  );
};

HomePage.propTypes = {
  location: PropTypes.string,
};

export default HomePage;
