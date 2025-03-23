// /* eslint-disable no-unused-vars */
// import React from 'react'
// import './Hero.css'
// import profile_img from '../../assets/WhatsApp Image 2025-02-19 at 10.12.06_ea95d10c.jpg'
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import CarouselSlider from '../HeroSlider';


// const Hero = () => {

//   return (
// <>

//       {/* <div id='home' className='hero'>
//       <img src={profile_img} alt="" />
//       <h1><span>I am Biswaranjan Nayak </span>Fullstack developer</h1>
//       <p>I am a passionate full-stack developer with expertise in building scalable web applications. Proficient in both frontend and backend technologies, I specialize in Spring Boot for backend development and React.js for creating dynamic user interfaces. With a strong foundation in database management and cloud deployment, I strive to develop efficient, high-performance, and user-friendly solutions.</p>
//       <div className="hero-action">
//         <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with Me</AnchorLink></div>
//         <div className="hero-resume" >My Resume</div>
//       </div>

//     </div> */}
//     <CarouselSlider/>
//       </>
//       )
// }

//       export default Hero


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Hero.css'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import profile_img from '../../assets/biswaimg.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const slides = [
  {
    title: "I am Biswaranjan Nayak",
    role: "Fullstack Developer",
    description: "I am a passionate full-stack developer with expertise in building scalable web applications. Proficient in both frontend and backend technologies, I specialize in Spring Boot for backend development and React.js for creating dynamic user interfaces.",
  },
  {
    title: "Creating Scalable Solutions",
    role: "Backend & Frontend Expertise",
    description: "With a strong foundation in database management and cloud deployment, I strive to develop efficient, high-performance, and user-friendly solutions.",
  },
  {
    title: "Building Future Innovations",
    role: "Software Engineer & Tech Enthusiast",
    description: "Passionate about leveraging modern technologies to craft seamless digital experiences, continuously exploring new tools and frameworks to enhance development workflows.",
  }
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
   
      loop
      className="hero-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='hero-main'>
            <div className='hero'>
              <h1><span>{slide.title}</span> {slide.role}</h1>
              <p>{slide.description}</p>
              <div className="hero-action">
                <div className="hero-connect">
                  <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with Me</AnchorLink>
                </div>
                <div className="hero-resume">My Resume</div>
              </div>
            </div>
            <div className='img-profile'>
              <img src={profile_img} alt="Profile" />


            </div>
          </div>


        </SwiperSlide>
      ))}
    </Swiper>
  );
}
