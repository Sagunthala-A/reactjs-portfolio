import React from 'react'
import './Footer.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <div className='footerSection'>
        <h4>Thank you for visiting my portfolio website !</h4>
        <FavoriteIcon className='heartIcon'/>
    </div>
  )
}

export default Footer