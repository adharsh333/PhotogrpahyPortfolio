import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Socialbar from './components/Socialbar';
import {EmblaCarousel} from './components/EmblaCarousel'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <EmblaCarousel />
      <Socialbar />
    </div>
  );
};

export default Home;

