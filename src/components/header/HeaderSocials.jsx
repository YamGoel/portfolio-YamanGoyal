import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/yaman-goyal-a827ab156" target = "_blank"><BsLinkedin /></a>
    <a href="https://github.com/YamGoel" target = "_blank"><FaGithub /></a>
    <a href="https://ijircst.org/DOC/9-a-novel-healthcare-application-for-hospital-bed-booking.pdf" target = "_blank"><BsFillFileEarmarkPdfFill /></a>
    </div>
  )
}

export default HeaderSocials
