import React from 'react';
import './About.css';
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <h1>Ms.Sagunthala</h1>
        <p>
          "An enthusiastic frontend developer eagerly waiting to showcase my
          skills and broaden my knowledge."
        </p>
        <div className="about__buttons">
          {/* https://drive.google.com/file/d/1NFPGotthE_6q_pvoYQRsEgadq32Ah_N0/view */}
          <a
            // href="https://drive.google.com/drive/u/2/folders/1h5rP07gAEcUUu_vQ9htsbJRwEQnHplkx"
            href="https://drive.google.com/file/d/1MOnUhdQdILuI4qrIqaN_BqHpyG1PQswr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="about__downloadResumeBtn">
              Download Resume
            </button>
          </a>
          <Link to="projects" smooth={true} duration={500}>
            <button className="about__myWorkBtn">My work</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;