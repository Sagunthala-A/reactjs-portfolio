import React from 'react';
import './Skills.css';
import { Element } from 'react-scroll';
import  LinearProgress  from '@mui/material/LinearProgress';
import skill_img from '../../assets/jojo/skill.jpg'

const Skills = () => {
  return (
    <Element className='skillContainer' name='skills'>
        <div className='skillContainer__image'>
            <img src={skill_img} alt='skills image'/>
        </div>
        <div className='skillContainer__skills'>
            <h2>Skillset</h2>

            <div className='skillContainer__skillSet'>
                <h5>Reactjs</h5>
                <div className='skillContainer__slider1'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>

            <div className='skillContainer__skillSet'>
                <h5>Redux</h5>
                <div className='skillContainer__slider2'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>

            <div className='skillContainer__skillSet'>
                <h5>Javascript</h5>
                <div className='skillContainer__slider3'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>

            <div className='skillContainer__skillSet'>
                <h5>CSS</h5>
                <div className='skillContainer__slider4'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>

            <div className='skillContainer__skillSet'>
                <h5>HTML</h5>
                <div className='skillContainer__slider5'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>

            <div className='skillContainer__skillSet'>
                <h5>JAVA</h5>
                <div className='skillContainer__slider6'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>

        </div>
    </Element>
  )
}

export default Skills

/*
        
            <h2>JAVA</h2>
            <div className="slider">
                <LinearProgress variant='determinate' value={70}/>
            </div>

        <h1>React</h1>
        <div className="line">
            <div></div>
        </div>
        <h1>javascript</h1>
        <div className="line">
            <div></div>
        </div>
        <h1>Redux</h1>
        <div className="line">
            <div></div>
        </div>

        
*/