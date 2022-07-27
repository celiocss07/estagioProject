import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Vaga from '../../components/ListTheVaga'
import Search from '../../components/Search';
import axios from 'axios';

function Vagas() {

  
  return (
      <div style={{marginTop:100}}>
        <Navbar />
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
       {/*  <Search /> */}
        </div>
        <Vaga />
        <Footer />

      </div>
  );
}

export default Vagas;