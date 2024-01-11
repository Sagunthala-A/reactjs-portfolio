import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import AboutContainer from './Components/AboutContainer/AboutContainer';
import Skills from './Components/Skills/Skills';
import ProjectContiner from './Components/ProjectContainer/ProjectContiner';

const App = () => {
  return (
    <div>
        <Navbar/>
        <AboutContainer/>
        <Skills/>
        <ProjectContiner/>
    </div>
  )
}

export default App