import React from 'react';
import { Element } from 'react-scroll';
import './Contact.css';
import { AccessAlarm,GitHub,LinkedIn,Mail } from '@mui/icons-material';
// import GitHubIcon from '@mui/icons-material/GitHub';
function Contact() {
  return (
    <Element name='contact' className='contact'>
          <h1>Contact</h1>
          <div className='contact__icons'>
            <a href='#' target='_blank'>
              <Mail className='icons'/>
            </a>
            <a href='#' target='_blank'>
              <GitHub/>
            </a>
            <a href='#' target='_blank'>
              <LinkedIn/>
            </a>
        </div>
    </Element>
  )
}

export default Contact;