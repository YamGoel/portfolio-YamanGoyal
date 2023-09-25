import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Title 1",
    github: "https://github.com/",
    preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 2,
    image: IMG2,
    title: "Title 2",
    github: "https://github.com/",
    preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 3,
    image: IMG3,
    title: "Title 3",
    github: "https://github.com/",
    preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 4,
    image: IMG1,
    title: "Title 4",
    github: "https://github.com/",
    preview: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 5,
    image: IMG2,
    title: "Title 5",
    github: "https://github.com/",
    preview: "https://dribbble.com/Alien_pixels"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, preview}) => {
            return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={preview} className='btn btn-primary' target='_blank'>See Preview</a>
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
