import React from 'react'
import About from './About';
import Hero from './Hero';
import Services from './Services';
import WtspButton from './WtspButton';


const Body = () => {
  
  return (
    <>
      <main>
        <WtspButton />
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
