import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Vagas from './pages/Vagas'
import InfoVaga from './pages/InfoVaga'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/info" element={<InfoVaga />}/>
          <Route path="/vagas" element={<Vagas />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
