import React, { useContext } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import AboutContainer from './Components/AboutContainer/AboutContainer';
import Skills from './Components/Skills/Skills';
import ProjectContiner from './Components/ProjectContainer/ProjectContainer';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import DataContext from './Components/Context/DataContext';
// import HireMe from './Components/HireMe/HireMe';
// import { Routes ,Route } from 'react-router';

 
const App = () => {
  const {darkTheme} = useContext(DataContext)
  return (
    <div className={darkTheme ? "darkMode" : "lightMode"}>
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