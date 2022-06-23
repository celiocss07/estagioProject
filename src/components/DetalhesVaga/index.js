import React from 'react';

import vagaImg from '../../assets/images/kkk.png'
import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';

import './style.css';

function DetalhesVaga() {
  return (
        <div className='info'>
            <div className='container'>
                <div className='col-1'>
                    <p></p>
                    <p>O Estagio agora esta mais perto de você</p>
                    <p>Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.</p>
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