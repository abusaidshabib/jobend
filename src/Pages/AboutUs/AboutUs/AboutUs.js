import React from 'react';
import useTitle from '../../../hook/UseTitle/UseTitle';
import AboutHero from '../AboutHero/AboutHero';
import AboutProducts from '../AboutProducts/AboutProducts';

const AboutUs = () => {

  useTitle("Home");

  return (
    <div>
      <AboutHero></AboutHero>
      <AboutProducts></AboutProducts>
    </div>
  );
};

export default AboutUs;