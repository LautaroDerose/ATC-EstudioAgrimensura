import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import About from './About';
import Servicios from './Servicios';
import Contact from './Contact';
import Carousel from './Carousel';
import Slider from './Slider';
import Hero from './Hero';

const services = [
  {
      id:1,
      label:"Estado Parcelario",
      description:"De acuerdo a la Nueva Ley de la Ciudad de Buenos Aires, Ley 6.347",
      toLink:"/"
  },
  {
      id:2,
      label:"Mensura Particular y División en propiedad Horizontal",
      description:"Relevamiento, confección de planos y gestión de acuerdo al Código Civil, artículo 2037, para toda parcela construida, en construcción o a construir, con permiso de obra debidamente otorgado por el órgano competente",
      toLink:"/nuestro-equipo"
  },
  {
      id:3,
      label:"Mensura",
      description:"De acuerdo a la Ley de Catastro 6.437 de la Ciudad de Buenos Aires.      Relevamiento, confección de planos de acuerdo a Reglamentos Técnicos vigentes, gestión y registro de planos de mensuras particulares de predios urbanos",
      toLink:"/servicios"
  },
  {
      id:4,
      label:"Prescripción Adquisitiva",
      description:"Relevamiento y confección de plano de acuerdo a Reglamentos Técnicos vigentes a fin de determinar el polígono en posesión que se pretende prescribir y ser publicitado en el certificado previsto en la ley",
      toLink:"/contacto"
  },
]



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
          <Servicios />
        </div>
        {/* <div id='galeria'  className=' mx-auto'>
          <Slider  />
        </div> */}
        
        <div id='contacto' >
          {/* <Contact /> */}
        </div>
      </main>
    </>
  )
}

export default Body
//     <>
//       <main>
//         <div className="" >     
//           <div className='z-10 flex justify-around w-screen  h-[70vh] p-8' style={{backgroundImage:'url(back2.jpg)', backgroundSize:'cover'}}>
//             <div className='w-full h-[100vh] flex items-center justify-center'>
//               {/* <h1 className='text-[#032433] font-bold text-[24px]'>Ofrecemos servicios de<br/>
//                 <span className=' text-[#019EDD] font-bold text-[18px] block'>Agrimensura</span>
//                 <span className='text-[#019EDD] font-bold text-[18px] block'>Topografia</span>
//                 <span className='text-[#019EDD] font-bold text-[18px] block'>Cartografia</span>
//               </h1> */}
//             </div>
//             <div className="relative w-full h-[50%] flex my-auto items-center justify-center">
//               <div className="absolute inset-0 bg-white opacity-25 z-0"></div>
//               <img className="w-[50%] z-10 opacity-100" src="logo1.png" alt="" />
//             </div>
//           </div>
//         </div>
//         <Servicios />
//         <div className=' flex items-center justify-center'>
//           <Carousel >
//           {slides.map((slide, index) => (
//             <div key={index} className='w-full'>
//               <img src={slide} alt='' className='w-full h-auto' />
//             </div>
//           ))}
//             {/* {
//               slides.map((slide) => (
//                 <img src={slide} alt="" className='p-4 object-cover'/>
//               ))
//             } */}
//           </Carousel>
//         </div>
//         <About/>
//         <Contact />
//       </main>
//     </>
//   )
// }

// export default Body
// colors: {
//       primary: '#032433',
//       accent: '#019EDD',
//       tertiary: '#CCCCCC',
//       secondary: '#084F6D',
//     }