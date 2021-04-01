import React from 'react';
import { Helmet } from 'react-helmet';
import NavBarMenu from '../components/Header/NavBarMenu';
import SecondaryHero from '../components/Hero/SecondaryHero';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { headData } from '../mock/data';
import '../style/main.scss';

const ServicesPage = () => {
  const { services } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{services.title}</title>
        <html lang={services.lang || 'en'} />
        <meta name="description" content={services.description} />

        <meta property="og:title" content={services.title} />
        <meta property="og:description" content={services.description} />
        <meta property="og:image" content={services.ogImage} />
      </Helmet>
      <NavBarMenu location="services" />
      <SecondaryHero title="My Services" subtitle="How can I help?" />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default ServicesPage;
