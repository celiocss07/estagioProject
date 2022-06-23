import React from 'react'
import { useNavigate } from 'react-router-dom';

import user1 from '../../assets/images/total.png'
import user2 from '../../assets/images/chevron.png'
import user3 from '../../assets/images/sonagol.jpeg'

import { BiTime } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';

import Search from '../Search';

import './styles.css'

function ListTheVaga(){

    const navigate = useNavigate();

    function acessInfo(){
        navigate('/info');
    }

    return (
        <div className='vaga' id='vagas'>
            <div className='container'>
                <h2>Vagas Mais Recentes</h2>
                <span className='line'></span>

                <Search />

                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>TotalEnergies</span></p>
                        <p>Gerente/Engenheiro de Manutenção</p>
                        <div className="icon">
                            <BiTime color="#000"/>
                            <p>Postado em 22/06/2022</p>
                        </div>

                        <div className="icon">
                            <MdOutlineLocationOn color="#000"/>
                            <p>Angola</p>
                        </div>

                        <button className="button" onClick={acessInfo}>Ver vaga</button>
                    </div>

                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p><span>Chevron</span></p>
                        <p>Engenheiro Industrial </p>
                        <div className="icon">
                            <BiTime color="#000"/>
                            <p>Postado em 22/06/2022</p>
                        </div>

                        <div className="icon">
                            <MdOutlineLocationOn color="#000"/>
                            <p>Angola</p>
                        </div>

                        <button className="button" onClick={acessInfo}>Ver vaga</button>
                    </div>

                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p><span>Sonangol</span></p>
                        <p>Engenheiro Mecânico Industrial</p>
                        <div className="icon">
                            <BiTime color="#000"/>
                            <p>Postado em 22/06/2022</p>
                        </div>

                        <div className="icon">
                            <MdOutlineLocationOn color="#000"/>
                            <p>Angola</p>
                        </div>

                        <button className="button" onClick={acessInfo}>Ver vaga</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListTheVaga;
