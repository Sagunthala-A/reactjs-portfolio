import React,{useState} from 'react';
import { Element } from 'react-scroll';
import './Contact.css';
import { AccessAlarm,GitHub,LinkedIn,Mail } from '@mui/icons-material';
import axios from 'axios';


const Contact = ()=> {

  const [userDetails,setUserDetails] = useState({
    name:'',
    email:'',
    number:'',
    message:''
  })
  const handleMailSend = async(e)=>{
    e.preventDefault();
    const {name,email,number,message} = userDetails;

    const data = {
      service_id:process.env.REACT_APP_YOUR_SERVICE_ID,
      template_id:process.env.REACT_APP_YOUR_TEMPLATE_ID,
      user_id:process.env.REACT_APP_YOUR_PUBLIC_KEY,
      template_params:{
        from_name:name,
        from_mail:email, 
        to_name:"Sagunthala",
        message:message,
        mobile:number
      }
    }
    try{
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data);
      alert(response.data);
    }catch(err){
      alert(err.message)
      console.log(err)
    }

  }

  return (
    <Element name='contact' className='contactContainer'>
          <h1>Contact</h1>
          <div className='contact'>
            <form className='contact__form' onSubmit={handleMailSend}>
              <label for='name'>Name</label>
              <input 
                type='text' 
                id='name'
                value = {userDetails.name}
                placeholder="What's your name ? "
                onChange = {(e)=>{setUserDetails({...userDetails,name: e.target.value})}}
                required/>

              <label for='email'>Email</label>
              <input 
                type='email' 
                id='email'
                value = {userDetails.email}
                onChange = {(e)=>{setUserDetails({...userDetails,email: e.target.value})}}
                placeholder="What's your web address ? "
                required/>

              <label for='mobile'>Mobile Number</label>
              <input 
                type='number'
                value = {userDetails.number}
                onChange = {(e)=>{setUserDetails({...userDetails,number: e.target.value})}}
                placeholder="Whats your mobile number ?"
                id='mobile'/>

              <label for='message'>Messege</label>
              <textarea 
                required
                type='text' 
                id='message'
                value = {userDetails.message}
                onChange = {(e)=>{setUserDetails({...userDetails,message: e.target.value})}}
                cols='40'
                rows='4'
                placeholder="Awaiting for your message..."
                />
              <button type='submit'>Send</button>
            </form>

            <div className='contact__icons'>  
              <a href='www.github.com' target='_blank'>
                <GitHub/>
              </a>
              <a href='www.linkedin.com' target='_blank'>
                <LinkedIn/>
              </a>
          </div>
        </div>
    </Element>
  )
}

export default Contact;