import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import DownloadButtons from '../components/DownloadButtons';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <DownloadButtons />
    </>
  );
};

export default Home;
