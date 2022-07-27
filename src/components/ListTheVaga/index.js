import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import user1 from "../../assets/images/total.png";
import user2 from "../../assets/images/chevron.png";
import user3 from "../../assets/images/sonagol.jpeg";

import { BiTime } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import "./styles.css";
import axios from "axios";

function ListTheVaga() {
  const navigate = useNavigate();
  const [data, setData] = useState([{}]);

  async function acessInfo() {
    await axios.get("http://localhost:3004/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
    // navigate('/info');
  }

  function handleClick(vaga_id){
    navigate(`/info/${vaga_id}`);
  }

  useEffect(() => {
    acessInfo();
  }, []);

  return (
    <div className="vaga" id="vagas">
      <div className="container">
        <h2>Vagas Mais Recentes</h2>
        <span className="line"></span>

        <div className="content">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <img src={user1} alt="user1" />
              <p>
                <span>{item.company}</span>
              </p>
              <p>{item.title}</p>
              <div className="icon">
                <BiTime color="#000" />
                <p>{item.created_at}</p>
              </div>

              <div className="icon">
                <MdOutlineLocationOn color="#000" />
                <p>Angola</p>
              </div>

              <button className="button" onClick={() => handleClick(item.id)}>
                Ver vaga
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListTheVaga;
