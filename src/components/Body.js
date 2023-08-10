import React from 'react'
import About from './About';
import Hero from './Hero';
import Services from './Services';


const Body = () => {
  
  return (
    <>
      <main>
        <div className="" >     
          <Hero />
        </div>
        <div id='nosotros' >
          <About/>
        </div>
        <div id='servicios' >
          <Services />
        </div>        
        <div id='contacto' >
        </div>
      </main>
    </>
  )
}

export default Body
