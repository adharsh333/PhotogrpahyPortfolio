import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Socialmedia from './components/Socialmedia';
import {EmblaCarousel} from './components/EmblaCarousel'

const Home = () => {
  return (
    <section>
      <HeroSection />
      <EmblaCarousel />
    </section>
  );
};

export default Home;

