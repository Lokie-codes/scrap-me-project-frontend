import React from 'react';
import { Navbar, Hero, Footer, About } from './components';
import { aboutus, hero, navlinks } from './data/scrapmedata';

const App = () => {
  return (
    <div>
      <div className='bg-gradient-to-b from-white to-black app-container'>

        <Navbar navlinks={navlinks} />
        <Hero hero={hero} />
        <About about={aboutus} />
      </div>
      <Footer />
    </div>
  );
};

export default App