import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsPinterest}from 'react-icons/bs'
import {AiFillGithub}from 'react-icons/ai'
import { BsInstagram } from "react-icons/bs";
import web2 from './../../resm/web2.png'
import logo from './../../resm/logo.png'
import emailjs from '@emailjs/browser';

import './Contact.css'

const Contact = () => {
  function sendEmail(e) {
    e.preventDefult();
    emailjs.sendEmail("service_cpyn0wh", "template_uuiggqw",e.target,"83VWm2X-LxILFNKY9") .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    
  }
  return (
    <div className="container">
    
      <h1 className="text-h1" >
      Thank you for your visit
      </h1>
      <h2 className='accounts'>You can follow all new on my following accounts</h2>
      <div >
      <ul className='soiol' >
        <li > <AiFillLinkedin color =" #93C11A"  size="38px" />  
        ALAA ABDALWAHED </li>
        <li> <BsPinterest  color =" #93C11A"  size="38px"  /> 
        ALAA ABDALWAHED</li>
        <li><AiFillGithub  color =" #93C11A"  size="38px" /> 
        
        alaa abdul wahed</li>
        <li> < BsInstagram   color =" #93C11A"  size="35px" /> alaa-abdalwahed </li>
      </ul>
      </div>
      <div>
      <img className='img' src={web2} title ="infographic" alt='' />
     

      </div>
      <section className='number'>
        <div className='container '>
            <h2>Send mail</h2>
            <form className='form1' onSubmit={sendEmail}>
                <lable style={{color:"white", margin:"20px"}}>name</lable>
                <input  type ="text" name ="name" />
                <lable style={{color:"white", margin:"20px"}}>Email</lable>
                <input  type ="email" name ="user_name" className='input1' />
                <lable style={{color:"white", margin:"20px"}}>Order</lable>
                <input  type ="text" name ="Order" className='input1' />
                <input  type="submit" value="Send" class="btn btn-outline-secondary" style={{color:"white",paddingLeft:"10px"}}/>

            </form>
            </div>
        

      </section>
      
    </div>
  )
}
export default Contact;
