import React from 'react';
import useTitle from '../../../hook/UseTitle/UseTitle';
import Companies from '../Companies/Companies';
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../FresherJobs/FresherJobs';
import HeroSection from '../HeroSection/HeroSection';
import IndustrySec from '../IndustrySec/IndustrySec';

const Home = () => {

  useTitle("Home")

  return (
    <div>
      <HeroSection></HeroSection>
      <IndustrySec></IndustrySec>
      <Companies></Companies>
      <FresherJobs></FresherJobs>
      <ExperiencedJobs></ExperiencedJobs>
    </div>
  );
};

export default Home;