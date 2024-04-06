import React,{useContext, useState} from 'react'
import './Navbar.css';
import {Link} from 'react-scroll';
// import Menu from '@mui/icons-material/Menu';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import DataContext from '../Context/DataContext';
import { Menu, LightMode, DarkMode} from '@mui/icons-material';

const Navbar = () => {

  const {darkTheme,setDarkTheme,toggleMenuBar,setToggleMenuBar} = useContext(DataContext)
  return (
    <nav className='navbar' style={{boxShadow:darkTheme?"":"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <div className='navbar__left'>
        <h1>Develop<span>er</span></h1>
      </div>
        <div className='theme'>
          <LightMode className="lightThemeIcon" style={{display:darkTheme ? "block":"none"}} onClick={()=>{setDarkTheme(false)}}/>
          <DarkMode className="darkThemeIcon" style={{display:darkTheme ? "none":"block"}} onClick={()=>{setDarkTheme(true)}}/>
        </div>
      {/* <div className= {toggleMenuBar?"toggleMenuBar" : ""}> */}
        <Menu
        // className='menuIcon'
        // className="menuIcon"
        className={toggleMenuBar?"menuIcon" : "disableMenuIcon"}
          onClick = {()=>{setToggleMenuBar(!toggleMenuBar)}}
        />
        {/* className='navbar__right' */}
        <div className={toggleMenuBar?"toggle" : "navbar__right"}
        >
          <Link 
            to='about'  
            smooth={true} 
            duration={500}
            onClick={()=>{setToggleMenuBar(false)}}
            ><h4>About me</h4>
          </Link>
          <Link 
            to='skills'  
            smooth={true} 
            duration={500}
            onClick={()=>{setToggleMenuBar(false)}}
            ><h4>Skills</h4>
          </Link>
          <Link 
            to='projects'  
            smooth={true} 
            duration={500}
            onClick={()=>{setToggleMenuBar(false)}}
            ><h4>Projects</h4>
          </Link>
          <Link 
            to='contact'  
            smooth={true} 
            duration={500}
            onClick={()=>{setToggleMenuBar(false)}}
            ><h4>Contact</h4>
          </Link>
          <Link 
            to='contact'
            smooth={true} 
            duration={500}
            onClick={()=>{setToggleMenuBar(false)}}
            ><h4>Hire Me</h4>
          </Link>
        </div>
        
      {/* </div> */}
    </nav>
  )
}

export default Navbar;