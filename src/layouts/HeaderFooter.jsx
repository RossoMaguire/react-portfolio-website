import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import NavBarMenu from '../components/Header/NavBarMenu';
import useHasMounted from '../hooks/useHasMounted';
import { headData } from '../content/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default function HeaderFooter({ children }) {
  const { index, services } = headData;

  const path = useLocation();
  const isServicesPage = path.pathname === '/services';

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{isServicesPage ? services.title : index.title}</title>
        <html lang="en" />
        <meta
          name="description"
          content={isServicesPage ? services.descriptiuon : index.description}
        />

        <meta property="og:title" content={isServicesPage ? services.title : index.title} />
        <meta
          property="og:description"
          content={isServicesPage ? services.description : index.description}
        />
        <meta property="og:image" content={isServicesPage ? services.ogImage : index.ogImage} />
      </Helmet>
      <NavBarMenu location={path.pathname} />
      {children}
      <Contact location={path.pathname} />
      <Footer />
    </>
  );
}

HeaderFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
