import React from 'react'
import './HireMe.css'
import {Link} from 'react-router-dom'

const HireMe = () => {
  return (
    <Link to='/hireme' className='hireContainer'>
      <div className='hireContainer'>
        <a href='mailto:sagunthala9925@gmail.com' target='_blank'>Hiring </a>
        <a href="mailto:no-one@snai1mai1.com?subject=free chocolate">example</a>

        <a href="mailto:manish@simplygraphix.com?subject=Feedback for 
webdevelopersnotes.com&body=The Tips and Tricks section is great
&cc=anotheremailaddress@anotherdomain.com
&bcc=onemore@anotherdomain.com">Send me an email</a>

      </div>

    </Link>
  )
}

export default HireMe;