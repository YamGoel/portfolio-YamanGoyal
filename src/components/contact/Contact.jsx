import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l0ipmws', 'template_wmebrug', form.current, 'R4ucChtxHkXvykbPW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yamangoyal002@gmail.com</h5>
            <a href="mailto:yamangoyal002@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Yaman Goyal</h5>
            <a href="https://www.linkedin.com/in/yaman-goyal-a827ab156/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8058847005</h5>
            <a href="https://api.whatsapp.com/send?phone=918058847005" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message Here' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
