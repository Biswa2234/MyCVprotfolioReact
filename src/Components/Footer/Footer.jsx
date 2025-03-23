/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" /> */}
          <div className='logo' >Biswa</div>
          <p>I am a skilled Full-Stack Developer specializing in React.js and Spring Boot, with experience in building scalable web applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>2025    Biswaranjan Nayak</p>
        <div className="footer-bottom-right">
          <p>Term of service</p>
          <p>privacy policy</p>
          <p>connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
