import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import AboutContainer from './Components/AboutContainer/AboutContainer';
import Skills from './Components/Skills/Skills';
import ProjectContiner from './Components/ProjectContainer/ProjectContiner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import HireMe from './Components/HireMe/HireMe';
// import { Routes ,Route } from 'react-router';

 
const App = () => {
  return (
    <div>
        <Navbar/>
        <AboutContainer/>
        <Skills/>
        <ProjectContiner/>
        <Contact/>
        <Footer/>
    </div>


  )
}

export default App