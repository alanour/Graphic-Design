import React from 'react'
import s06 from './../../resm/s06.png';
import './Products.css'
import Data from './information.js'




function Products() {
  const blogItem = Data.map((item)=>{
    return(
      <div className='col-md-4'>
        <div className='box'>
        <img src={item.img}/>
        <h3>{item.title}</h3>
      
        </div>
        
      </div>
    )
  })
  return (
    <div>
    <section className='pro1'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h2 className='h2'> Graphic Design  </h2>
             <p className='pg'>We help you turn your ideas into stylish and creative designs.</p> 
             <ul className='type'>
              <li>Logo</li>
              <li>Brochure</li>
              <li>Business Card</li>
              <li> Poster</li>
              <li>Typography</li>
              <li> Web design</li>
             </ul>
          </div>
          <div className='col-md-6'>
            <img className='proimg' src={s06} alt=""/>
          </div>
        </div>
      </div>
       <section className='blogs'>
        <div className='container'>
          <div className='row'>
            {blogItem}
           
          </div>

        </div>

       </section>
     
      
        

    </section>
    </div>
  )
}

export default Products