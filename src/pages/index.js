/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/Header/NavBar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const HomePage = () => {
  const { index } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{index.title}</title>
        <html lang={index.lang || 'en'} />
        <meta name="description" content={index.description} />

        <meta property="og:title" content={index.title} />
        <meta property="og:description" content={index.description} />
        <meta property="og:image" content={index.ogImage} />
      </Helmet>
      <NavBar location="home" />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
