import React from 'react'
import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        <h1>Develop<span>er</span></h1>
      </div>
        <div className='navbar__right'>
          <Link 
            to='about'  
            smooth={true} 
            duration={500}
            ><h4>About me</h4>
          </Link>
          <Link 
            to='skills'  
            smooth={true} 
            duration={500}
            ><h4>Skills</h4>
          </Link>
          <Link 
            to='projects'  
            smooth={true} 
            duration={500}
            ><h4>Projects</h4>
          </Link>
          <Link 
            to='education'  
            smooth={true} 
            duration={500}
            ><h4>Education</h4>
          </Link>
          <Link 
            to='contact'  
            smooth={true} 
            duration={500}
            ><h4>Contact</h4>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar