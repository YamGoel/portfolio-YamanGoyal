import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiLogoTwitter} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Yaman Goyal</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/yaman-goyal-a827ab156/ " target='_blank'><AiFillLinkedin /></a>
        <a href="https://twitter.com/YamanGo39166221" target='_blank'><BiLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Yaman Goyal. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
