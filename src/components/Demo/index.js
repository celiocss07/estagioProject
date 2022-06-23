import React from 'react'
import { useNavigate } from 'react-router-dom';

import aboutImg from '../../assets/images/emprego.png';

import './Demo.css'

function Demo(){

    const navigate = useNavigate();

    function acessVaga(){
        navigate('/vagas');
    }

    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p></p>
                    <p>O Estagio agora esta mais perto de você</p>
                    <p>Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.</p>
                    <button className='button' onClick={acessVaga}>Ver todas vagas do estagio </button>
                </div>
                <div className='col-2'>
                    <img className='img' src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Demo;
