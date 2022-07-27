import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa'

import './styles.css';

function Navbar(){
    const navigate = useNavigate();

    function acessVaga(){
        navigate('/vagas');
    }

    function acessHome(){
        navigate('/');
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo' >
                    <span style={{color: 'white', fontStyle:'italic', fontWeight:'bold'}}>estagios.com</span>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href onClick={acessHome}>Pagina Inicial</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Sobre</a>
                    </li>
                    <li className='nav-item'>
                        <a href onClick={acessVaga}>Vagas</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
