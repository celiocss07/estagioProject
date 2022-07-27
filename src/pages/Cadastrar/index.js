import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./style.css";
import axios from "axios";
function Cadastrar() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const editor = useRef(null);
  const config = {
    readonly: false,
    minHeight: 400
  };

  function handleSubmit() {
    axios
      .post("http://localhost:3004/posts", {
        id: new Date().getTime().toString(),
        title,
        company,
        content,
        created_at: new Date().toLocaleDateString()
      })
      .then((res) => {
        alert("Cadastrado com sucesso!");
        
        console.log(res)
      })
      .catch((err) => {
        alert("Erro ao cadastrar!");
        //console.log( err.message);
      });
  }

  return (
    <>
      <Navbar />
      <div className="middle">
        <h1>Cadastrar uma vaga</h1>
        <div className="boxTitle">
          <input
            className="title"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Empresa"
          />
          <input
            className="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título da vaga"
          />
        </div>

        <form className="content">
          <JoditEditor
            ref={editor}
            
            config={config}
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {console.log(content)}}
          />
          <button type="submit" className="button" onClick={handleSubmit}>
            Cadastrar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Cadastrar;
