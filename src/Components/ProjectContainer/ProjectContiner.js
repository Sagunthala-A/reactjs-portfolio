import React from 'react';
import { Element } from 'react-scroll';
import './ProjectContainer.css';
import Project from '../Project/Project';
import financeApp from '../../assets/Finance-tracker-app.png';
import bookNavigatorApp from '../../assets/Book-Navigator-app.png';
import img2 from "../../assets/jojo/project11.png";
import img3 from "../../assets/jojo/project12.png";
import img4 from "../../assets/jojo/project13.png";
import img5 from "../../assets/jojo/project14.png";
import img6 from "../../assets/jojo/project15.png";


const ProjectConatiner = () => {
  const projectList = [
      {
        img: bookNavigatorApp,
        title: "Book Navigator App",
        desc:"Explore millions of books and find your next read with Book Navigator (powered by Google Books).",
        // desc:"Dive into the world of books and discover your next great read with Book Navigator App!"
        link: "https://virtual-book-beta.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/VirtualBook"
      },
      {
        img: financeApp,
        title: "Finance Tracker App",
        desc:"It is used to manage the expensive and income of a individual person.",
        link: "https://sagu-finance-tracker-app.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/Finance-Tracker-App"
      },
      {
        img: financeApp,
        title: "Finance Tracker App",
        desc:"It is used to manage the expensive and income of a individual person.",
        link: "https://sagu-finance-tracker-app.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/Finance-Tracker-App"
      },
      {
        img: financeApp,
        title: "Finance Tracker App",
        desc:"It is used to manage the expensive and income of a individual person.",
        link: "https://sagu-finance-tracker-app.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/Finance-Tracker-App"
      },

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