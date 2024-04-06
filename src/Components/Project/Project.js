import React, { useContext, useState } from 'react';
import './Project.css';
import { GitHub, TravelExplore } from '@mui/icons-material';
import DataContext from '../Context/DataContext';



const Project = ({ image, link, desc, title, gitLink }) => {

  const {hovered, setHovered} = useContext(DataContext)

  return (
    // <a href={link} target='_blank' rel='noopener noreferrer'>
      <div
        className={`project ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={image} alt={`${title} image`} />
        <div className='project__content'>
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className='project__icons'>
            <a href={link} target='_blank' rel='noopener noreferrer' title="Live page">
              <TravelExplore/>
            </a>
            <a href={gitLink} target='_blank' rel='noopener noreferrer' title="Github page">
              <GitHub/>
           </a>
          </div>
        </div>
      </div>
    // </a>
  );
};

export default Project;




