/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderFooter from '../layouts/HeaderFooter';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/main.scss';

const HomePage = () => {
  return (
    <HeaderFooter>
      <Hero />
      <About />
      <Projects />
    </HeaderFooter>
  );
};

export default HomePage;
