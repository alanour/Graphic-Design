import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsPinterest}from 'react-icons/bs'
import {AiFillGithub}from 'react-icons/ai'
import { BsInstagram } from "react-icons/bs";
import web2 from './../../resm/web2.png'
import logo from './../../resm/logo.png'


import './Contact.css'

const Contact = () => {
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
        
        

      </section>
      
    </div>
  )
}
export default Contact;