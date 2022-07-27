import React, { useEffect, useState } from 'react';

import vagaImg from '../../assets/images/kkk.png'
import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';

import './style.css';

function DetalhesVaga({info}) {
    
   

    function createMarkup() {
        return {__html: info?.content};
      }

      useEffect(()=>{
        console.log(info?.title)
      },[])
  return (
        <div className='info'>
            <div className='container'>
                <div className='col-1'>
                    
                    <p>Vaga para {info?.title} na {info?.company}  </p>
                    <div dangerouslySetInnerHTML={createMarkup()}></div>
                    <div className="icon">
                       <div>
                        <MdOutlineLocationOn color="#000"/>
                        <p>Angola</p>
                       </div>

                       <div>
                        <BsBag color="#000"/>
                        <p>Estagio</p>
                       </div>

                       <div>
                        <MdOutlineEmail color="#000"/>
                        <p>sonangol@estagio.com</p>
                       </div>
                    </div>

                    
                    <button className='button'>Engenheiro Industrial </button>
                </div>
                <div className='col-2'>
                    <img className='img' src={vagaImg} alt="" />
                </div>
            </div>
        </div>
  );
}

export default DetalhesVaga;