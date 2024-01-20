import React from 'react';
import './About.css';
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <h1>Ms.Sagunthala</h1>
        <p>"An enthusiastic frontend developer eagerly waiting to showcase my skills and broaden my knowledge."</p>
        <div className='about__buttons'>
          <a href="https://drive.google.com/drive/u/2/folders/1h5rP07gAEcUUu_vQ9htsbJRwEQnHplkx" target="_blank" rel="noopener noreferrer">
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