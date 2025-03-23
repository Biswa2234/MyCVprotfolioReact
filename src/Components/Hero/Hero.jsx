/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/WhatsApp Image 2025-02-19 at 10.12.06_ea95d10c.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {

  return (

    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I am Biswaranjan Nayak </span>Fullstack developer</h1>
      <p>I am a passionate full-stack developer with expertise in building scalable web applications. Proficient in both frontend and backend technologies, I specialize in Spring Boot for backend development and React.js for creating dynamic user interfaces. With a strong foundation in database management and cloud deployment, I strive to develop efficient, high-performance, and user-friendly solutions.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <div className="hero-resume" >My Resume</div>
      </div>

    </div>
  )
}

export default Hero
