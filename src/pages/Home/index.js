import React from 'react';

import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Vaga from '../../components/ListTheVaga'
import Demo from '../../components/Demo'
import Footer from '../../components/Footer'

function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Vaga />
        <Demo />
        <Footer />
      </>
  );
}

export default Home;