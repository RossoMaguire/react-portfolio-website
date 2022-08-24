import React from 'react';
import HeaderFooter from '../layouts/HeaderFooter';
import SecondaryHero from '../components/Hero/SecondaryHero';
import Services from '../components/Services/Services';

const ServicesPage = () => {
  return (
    <HeaderFooter>
      <SecondaryHero title="My Services" subtitle="How can I help?" />
      <Services />
    </HeaderFooter>
  );
};

export default ServicesPage;
