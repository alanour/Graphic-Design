import React, { Fragment } from 'react'
import Header from './Header';
import './Home.css';
import Data from './../Data'


const Home = () => {
  const blogItem = Data.map((item)=>{
    return(
      <div className='col-md-4'>
        <div className='box'>
        <img src={item.img}/>
        <h3>{item.title}</h3>
        <h5>{item.description}</h5>
        </div>
        
      </div>
    )
  })
  return (
    <div className="container">
    
   <Fragment>
     <Header />
      <section className='number'>
        <div className='contaner'>
          <div className='row'>
            <div className='col-md-3'>
              <h2>Logo</h2>
              <h5>Visual Identity</h5>
           </div>
           <div className='col-md-3'>
              <h2>Packaging</h2>
              <h5>creative ideas</h5>
           </div>
           <div className='col-md-3'>
              <h2> Posters</h2>
              <h5>Elegant Designs</h5>
           </div>
           <div className='col-md-3'>
              <h2>Websites</h2>
              <h5>Elegant Designs</h5>
           </div>
            
           
          </div>
        </div>
      </section>   
      <section className='blogs'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12'>
              <h2>Important Of Graphic Design</h2>
              <p>Good graphic design will help a business to gain high visibility which in turn can lead to increased sales. 
              <br/> Attractive visuals, effective communication of ideas, higher visibility and enhanced credibility push traffic to your brand.</p>
            </div>
          </div>
          <div className='row'>
            {blogItem}

          </div>

        </div>
      </section>
   </Fragment>  
  </div>
  )
}
export default Home;