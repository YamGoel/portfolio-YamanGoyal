import React from 'react'
import './portfolio.css'
import IMG01 from '../../assets/shreenathsales.png'
import IMG from '../../assets/portfolio.png'
import IMG0 from '../../assets/portfolio0.png'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

const data = [
  {
    id: 11,
    image: IMG9,
    title: "ThriftSell",
    github: "https://www.thriftsell.in",
    language: "Django / JavaScript / RazorPay / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 10,
    image: IMG8,
    title: "LetMeOrder",
    github: "https://www.letmeorder.in",
    language: "Django / Python / JavaScript / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 9,
    image: IMG7,
    title: "FitFinity",
    github: "https://yamgoel.github.io/FitFinity/",
    language: "React / JavaScript / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 8,
    image: IMG6,
    title: "Artfolio",
    github: "https://yamgoel.github.io/Artfolio-Yaman-Goyal/",
    language: "React / JavaScript / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 0,
    image: IMG01,
    title: "Shreenath Sales",
    github: "https://shreenathsales.in/",
    language: "WordPress"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 1,
    image: IMG,
    title: "Portfolio",
    github: "https://yamgoel.github.io/portfolio-YamanGoyal/",
    language: "React / JavaScript / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 2,
    image: IMG0,
    title: "Ticketless Entry System",
    github: "https://github.com/YamGoel/TicketlessEntrySystem.git",
    language: "Django / JavaScript / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 3,
    image: IMG1,
    title: " elBed - Hospital Bed Booking System",
    github: "https://github.com/YamGoel/elBed.git",
    language: "PHP / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 4,
    image: IMG2,
    title: "Medibed - Beds Just a Click Away",
    github: "https://github.com/YamGoel/Medibed.git",
    language: "Django / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 5,
    image: IMG3,
    title: "Stagryption: GUI Application for Encryption & Steganography",
    github: "https://github.com/YamGoel/Stagryption.git",
    language: "Tkinter / ChaCha20"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 6,
    image: IMG4,
    title: "Process Scheduling Methods, Banker’s Algorithm and Distributed Shared Memory",
    github: "https://github.com/YamGoel/ProcessScheduling.git",
    language: "Python / JavaScript / HTML / CSS"
    // preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 7,
    image: IMG5,
    title: "Stock Market Prediction Using Deep Learning Techniques",
    github: "https://github.com/YamGoel/StockMarketPrediction.git",
    language: "Python / Jupyter / Deep Learning"
    // preview: "https://dribbble.com/Alien_pixels"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, language}) => {
            return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn btn-primary' target='_blank'>Let's see</a><br />
              <h5>{language}</h5>
              {/* <a href={preview} className='btn btn-primary' target='_blank'>See Preview</a> */}
            </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
