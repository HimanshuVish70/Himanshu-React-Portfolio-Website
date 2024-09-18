import React from 'react'
import './Hero.css'
import profile from '../../assets/Photo.jpg'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <img src={profile} alt="" />
            <h1>I'm <span>Himanshu Kumar Vishwakarma</span>, Full stack Web developer in Lucknow, India</h1>
            <p>I am a Full Stack Web Developer and Data Analyst in India, Lucknow with 1 year of experience as Intern at Evoastra Ventures, currently Intern at Zidio Development.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero