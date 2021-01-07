import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavBar from './Header/NavBar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  navData,
  logoData,
  heroData,
  aboutData,
  servicesData,
  projectsData,
  contactData,
  clientData,
  testimonialData,
  footerData,
} from '../mock/data';

function App(props) {
  const { location } = props;
  // console.log('The current location of the app component is ', location.pathname);

  const [nav, setNav] = useState([]);
  const [logo, setLogo] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [contact, setContact] = useState({});
  const [clients, setClients] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNav([...navData]);
    setLogo({ ...logoData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setServices([...servicesData]);
    setContact({ ...contactData });
    setClients([...clientData]);
    setTestimonials([...testimonialData]);
    setFooter({ ...footerData });
  }, []);

  if (location.pathname === '/') {
    return (
      <PortfolioProvider
        value={{ nav, logo, hero, about, projects, contact, clients, testimonials, footer }}
      >
        <NavBar location={location} />
        <Hero location={location} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    );
  }
  return (
    <PortfolioProvider
      value={{ nav, logo, hero, services, projects, contact, clients, testimonials, footer }}
    >
      <NavBar location={location} />
      <Hero location={location} />
      <Services />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

App.propTypes = {
  location: PropTypes.string,
};

export default App;
