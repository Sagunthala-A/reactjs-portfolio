import React,{useState} from 'react'
import './Navbar.css';
import {Link} from 'react-scroll';
import Menu from '@mui/icons-material/Menu';

const Navbar = () => {
  const [toggleMenuBar,setToggleMenuBar] = useState(false)
  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <h1>Develop<span>er</span></h1>
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