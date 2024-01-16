import React from 'react';
import { Element } from 'react-scroll';
import './Contact.css';
import { AccessAlarm,GitHub,LinkedIn,Mail } from '@mui/icons-material';
function Contact() {

  const handleMailtoClick = () => {
    window.location.href = 'mailto:sagunthala9925@gmail.com';
  };
  return (
    <Element name='contact' className='contact'>
          <h1>Contact</h1>
          <div className='contact__icons'>
            <a href='mailto:sagunthala9925@gmail.com' target='_blank'>
              <Mail className='icons'/>
            </a>
            <a href='www.github.com' target='_blank'>
              <GitHub/>
            </a>
            <a href='www.linkedin.com' target='_blank'>
              <LinkedIn/>
            </a>
        </div>
    </Element>
  )
}

export default Contact;