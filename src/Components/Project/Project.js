// import React,{useState} from 'react';
import './Project.css';

// const Project = ({image,link,desc,title}) => {


    
//   const [showImg, setShowImg] = useState(true);

//   function handleMouseEnter(event) {
//     event.stopPropagation();
//     setShowImg(false);
//   }

//   function handleMouseLeave(event) {
//     event.stopPropagation();
//     setShowImg(true);
//   }

//   return (
    
//     <a href={link} target='_blank'>
//       <div 
//         className='project'
//         // onMouseEnter={()=>{setShowImg(false)}}
//         // onMouseLeave={()=>{setShowImg(true)}}
        
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
        
//         >

//         {
          
//           showImg ? (
//             <img src={image} alt={`${title} image`}/>
//           ):(
//             <div className='project__content'>
//               <h4>{title}</h4>
//               <p>{desc}</p>
//             </div>
//           )
//         }

//       </div>
//     </a>
//   )
// }

// export default Project;



import React, { useState } from 'react';
import './Project.css';

const Project = ({ image, link, desc, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <div
        className={`project ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={image} alt={`${title} image`} />
        <div className='project__content'>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;




