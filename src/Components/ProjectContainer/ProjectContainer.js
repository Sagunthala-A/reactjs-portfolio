import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import './ProjectContainer.css';
import Project from '../Project/Project';
import DataContext from '../Context/DataContext';


const ProjectConatiner = () => {

  const {projectList} = useContext(DataContext)

  return (
    <Element name='projects' className='projectContainer'>
        <h1>Projects</h1>
        <p>Here are some of the projects and clone projects are done by me.By developing these projects I upgraded my skills</p>
        <div className='projectContainer__project'>
            {
              projectList.map((project,index)=>{
                return(
                  <Project
                    key={index}
                    image = {project.img}
                    title = {project.title}
                    link = {project.link}
                    desc = {project.desc}
                    gitLink = {project.gitLink}
                  />
                )
              })
            }
        </div>
    </Element>
  )
}

export default ProjectConatiner;