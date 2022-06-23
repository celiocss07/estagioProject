import React from 'react'
import './styles.css'

function Footer(){
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Pagina Inicial</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Sobre</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Vagas</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022, All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
