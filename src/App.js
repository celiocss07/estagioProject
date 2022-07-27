import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Vagas from "./pages/Vagas";
import InfoVaga from "./pages/InfoVaga";
import Cadastrar from "./pages/Cadastrar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/info">
            <Route path=":vagaId" element={<InfoVaga />} />
          </Route>
          <Route path="/vagas" element={<Vagas />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
