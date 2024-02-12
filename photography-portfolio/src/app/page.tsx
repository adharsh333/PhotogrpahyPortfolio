import React from 'react';
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Socialmedia from './components/Socialmedia';
import EmblaCarousel from './components/EmblaCarousel'
import './embla.css'


const OPTIONS = { align: 'start', dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



const Home = () => {
  return (
    <section>
      <HeroSection />
      

<EmblaCarousel slides={SLIDES} options={OPTIONS} />

    </section>
  );
};

export default Home;

