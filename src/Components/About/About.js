import React from 'react';
import './About.css';
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <h1>Ms.Sagunthala</h1>
        <p>I'm an enthusiastic web developer</p>
        <div className='about__buttons'>
          <a>
            <button className='about__downloadResumeBtn'>Download Resume</button>
          </a>
          <Link to='projects' smooth={true} duration={500}>
            <button className='about__myWorkBtn'>My work</button>
          </Link>
      </div>
      </div>
    </div>
  )
}

export default About