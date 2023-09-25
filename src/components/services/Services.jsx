import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck className='service__list-icon'/>
            <p>Web Design</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Mobile Application Design</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Prototyping</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Interaction Design</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Static Design</p>
            </li>
          </ul>
        </article>
        
      <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck className='service__list-icon'/>
            <p>Front-end Web Development</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Back-end Web Development</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Full Stack Web Development</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Content Developer</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Interactive Web Development</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck className='service__list-icon'/>
            <p>Research Work</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Creative Content Ideas</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Content Writing</p>
            </li>
            <li><BsCheck className='service__list-icon'/>
            <p>Proofreading</p>
            </li>
          </ul>
        </article>
        </div>
    </section>
  )
}

export default Services
