import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Premium from '../components/Premium';
import DownloadButtons from '../components/DownloadButtons';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Premium />
      <DownloadButtons />
    </>
  );
};

export default Home;
