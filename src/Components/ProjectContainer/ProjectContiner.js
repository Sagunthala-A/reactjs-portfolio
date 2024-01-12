import React from 'react';
import { Element } from 'react-scroll';
import './ProjectContainer.css';
import Project from '../Project/Project';
import img1 from "../../assets/jojo/project10.png";
import img2 from "../../assets/jojo/project11.png";
import img3 from "../../assets/jojo/project12.png";
import img4 from "../../assets/jojo/project13.png";
import img5 from "../../assets/jojo/project14.png";
import img6 from "../../assets/jojo/project15.png";


const ProjectConatiner = () => {
  const projectList = [
    {
        img: img1,
        title: "TheFindtalk",
        desc:"India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
        link: "https://thefindtalk.com/",
      },
      {
        img: img2,
        title: "AR Projects Ltd",
        desc:
          "AR Projects Ltd is an E-Learning company which provides coding training for both school and college students.",
        link: "https://www.arprojectsltd.com/",
      },
      {
        img: img3,
        title: "Complaint Management System",
        desc:
          "It is used in city corporations to handle complaints for particular areas corporation.",
        link: "https://corporation-management-system.netlify.app/",
      },
      {
        img: img4,
        title: "Firegram",
        desc: "An online platform for everyone to share their images.",
        link: "https://firegram-65fdc.web.app/",
      },
      {
        img: img5,
        title: "Expense Tracker",
        desc: "This application is used to store our day to day expenses.",
        link: "https://reactexpensetracker.netlify.app/",
      },
      {
        img: img6,
        title: "COVID 19 Tracker",
        desc:
          "This website shows overview of the covid 19 situation and also provide details country wise.",
        link: "https://reactcoronatracker.netlify.app/",
      }
    ]

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
                  />
                )
              })
              
            }
        </div>
    </Element>
  )
}

export default ProjectConatiner;