import React from 'react'
import aboutImg from '../../assets/images/job.jpg'
import './About.css'

function About() {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={aboutImg} alt='img' />
                <div className='col-2'>
                    <h2>Consiga o estagio dos seus sonhos</h2>
                    <p>simplifica o processo de recrutamento</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                </div>
            </div>
        </div>
    )
}

export default About
