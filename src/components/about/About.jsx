import React from 'react'
import './about.css'
import ME from '../../assets/me-aboutn.png'
import {LiaAwardSolid} from 'react-icons/lia'
import {MdSchool} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <LiaAwardSolid className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>MCA</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>9+</small>
            </article>
          </div>
          <p>
            I am a MCA student with a strong foundation in computer science and a passion for technology-driven innovation. With a Bachelor's degree in Computer Science, I have honed my skills through hands-on projects and internships. I am eager to embark on my MCA journey, eager to explore emerging technologies and contribute to the ever-evolving world of computer applications.
            </p>
            <a href="#contact" id='contactbtn' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
