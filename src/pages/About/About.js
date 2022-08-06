import React from 'react'
import './About.css'
import web1 from './../../resm/web1.png'
const About = () => {
  return (
    <div className="container">
    
      <h1 className="text-h1">
         Hi I'm Alaa
      </h1>
      <p className='pg'>
      I'm here to help you turn your ideas into stylish and creative designs.
      From the idea to research, work and diligence until arriving at a beautiful design that achieves the desired goal and goal.
      I am here to help you build your unique and innovative brand .
      </p>
      <div className='bgr'>
      <img className='img' src={web1} title ="infographic" alt='' />
      </div>
      <section className='number'>
        <div className='container'>

        </div>

      </section>
    </div>
  )
}
export default About;