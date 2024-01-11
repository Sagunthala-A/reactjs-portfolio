import React from 'react';
import { Element } from 'react-scroll';
import './ProjectContainer.css';
import Project from '../Project/Project';

const ProjectConatiner = () => {

  return (
    <Element name='projects' className='projectContainer'>
        <div className='projectContainer__content'>
            <h1>Projects</h1>
            <p>Here are some of the projects and clone projects are done by me.By developing these projects I upgraded my skills</p>
        </div>
        <div className='projectContainer__project'>
            <Project />
        </div>
    </Element>
  )
}

export default ProjectConatiner