import React from 'react';
import { Navbar, Hero, Footer, About, Services, ContactUs } from './components';
import { aboutus, contactus, hero, navlinks, services } from './data/scrapmedata';

// import Services from './components/Services';

const App = () => {
  return (

    <div>
      <div className='bg-slate-100'>

        <Navbar navlinks={navlinks} />
        <Hero hero={hero} />
        <About about={aboutus} />
        <Services services={services} />
        <ContactUs contact={contactus} />
      </div>
      <Footer />
    </div>
  );
};

export default App