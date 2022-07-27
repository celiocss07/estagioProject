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
                    <p>O mercado de trabalho atual procura cada vez mais por profissionais que estejam preparados para o desempenho de atividades. Assim, as empresas fazem uso de processos mais seletivos no recrutamento de novos empregados. É nesse contexto que as instituições de ensino fazem uso de programas e editais que possibilitam a inserção dos estudantes no âmbito do mercado de trabalho por meio do estágio </p>
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
