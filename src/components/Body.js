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