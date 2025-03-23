/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/my-pic111.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Full-stack developer with familiar in Java, Spring Boot, and React.js. Skilled in building scalable web applications, RESTful APIs, and modern front-end interfaces. Good knowledge in Spring Tool Suite (STS) for backend development and creating dynamic, user-friendly UIs with React.js and MySQL. Always eager to learn and implement cutting-edge technologies.</p>
            <p>Skills Known  :   HTML ,CSS ,JavaScript ,React ,Bootstrap ,Java ,SpringBoot ,MySql ,Github</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML5 & CSS3</p><hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JAVA & JavaScript</p><hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React</p><hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p><hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivments">
        <div className="about-achivment">
          <h1>1yr</h1>
          <p>EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivment">
          <h1>5+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivment">
          <h1>1yr</h1>
          <p>INTERNSHIP</p>
        </div>

      </div>
    </div>
  )
}

export default About
