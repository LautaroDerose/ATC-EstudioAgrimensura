import React from 'react'
import { BsArrowDownCircle, BsInstagram } from 'react-icons/bs'
import '../App.css';


// const Hero = () => {
//   return (
//     // <div className='z-10 lg:h-[100%] bg-cover bg-no-repeat md:bg-contain md:opacity-100 opacity-75 ' style={{backgroundImage:'url(back_001.jpg)'}}>
//     // <div className='bg-slate-200 lg:h-[100%] h-[50%] ' style={{backgroundImage:'url(back_001.jpg)', backgroundSize:'cover'}}>
//     <div className='relative bg-slate-200 lg:h-[80vh] flex items-center h-[50%] '>
//       <div className='flex justify-around w-screen md:pt-0 pt-24' >
//         <div className="relative w-full flex items-center justify-center ">
//           <img className="w-[60%] z-20 " src="logo_monocromo.png" alt="" />
//         </div>
//       <div className='w-full flex justify-center items-center'><img src="back_002.jpg" className='h-[60%] object-cover ' alt="" /></div>
//       <div className='absolute bottom-0'>
//         <div className=' h-[5rem] md:pt-0 mb-4   ' >
//           <a className='btn-arrowDown flex items-center justify-center' ><BsArrowDownCircle className='icon text-[#032433] md:text-6xl text-3xl ' /></a>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

// icono llamativo
// const Hero = () => {
//   return (
//     // <div className='z-10 lg:h-[100%] bg-cover bg-no-repeat md:bg-contain md:opacity-100 opacity-75 ' style={{backgroundImage:'url(back_001.jpg)'}}>
//     // <div className='bg-slate-200 lg:h-[100%] h-[50%] ' style={{backgroundImage:'url(back_001.jpg)', backgroundSize:'cover'}}>
//     <div className='bg-slate-200 lg:h-[100%] h-[50%] '>
//       <div className='flex justify-around w-screen md:pt-0 pt-24' >
//         <div className="relative w-full md:h-[60vh] flex my-auto items-center justify-center ">
//           <img className="w-[60%] z-20 md:pt-32" src="logo_monocromo.png" alt="" />
//         </div>
//         <div className='w-full md:h-[60vh] flex justify-center items-center'><img src="heroImage_001.jpeg" className='h-full ' alt="" /></div>
//         {/* <div className='w-full md:h-[60vh] hidden md:block'></div> */}
//       </div>
//       <div className='md:h-[20vh] h-[5rem] md:pt-0 mt-4 flex justify-center  ' >
//         <a className='btn-arrowDown flex items-center justify-center' ><BsArrowDownCircle className='icon text-[#032433] md:text-6xl text-3xl ' /></a>
//       </div>
//     </div>
//   )
// }

// export default Hero

// dise;o centro y limpio


const Hero = () => {
  return (
    <div className=' bg-slate-200 flex flex-col items-center justify-center  h-[80vh] '>
    {/* <div className='h-screen bg-slate-200 flex flex-col items-center ' style={{backgroundImage:'url(back_001.jpg)', backgroundSize:'cover'}}> */}
      <div className=" md:flex md:items-center md:justify-between mx-auto md:px-[3%] lg:px-[6.5%] xl:px-[15%]  m-[2rem] pt-[4rem] ">
      {/* <div className=" h-[70%] w-[80%] flex items-center justify-evenly m-[4rem] pt-[4rem]  "> */}

        <div className='lg:w-[40%] flex items-center justify-center m-4 p-4 '>
          <img src="Logo_Vertical.png" alt="" className='md:w-[200px] w-[100px]' />
        </div>
        
        <div className="lg:w-[60%] w-screen flex flex-col items-center z-0 gap-8 px-4">
          <div className='flex flex-col gap-4'>
            <h1 className=' md:text-3xl sm:text-3xl text-2xl font-bold py-2  ' >Soluciones Topograficas </h1>
            <h2 className=' md:text-lg sm:text-2xl text-xl font-medium py-0  ' >Realizamos trabajos de Agrimensura,<br/> topografia y cartografia, para saver mas </h2>
          </div>
          <div className='flex w-[80%] gap-8 justify-around '>
            <div className=' flex justify-center items-center btn-hero bg-[#019EDD] w-[10rem] h-[3rem] '>
            {/* <div className=' flex justify-center items-center btn-hero bg-[#019EDD] rounded-full w-[10rem] h-[3rem] '> */}
              <a  href='#contacto' className=' icon text-white font-semibold '>Pedir Cotizacion</a> 
            </div>
            {/* <button className='border-2 border-[#019EDD] p-4 w-[10rem] h-[3rem] rounded-full flex items-center justify-center text-[#019EDD] font-semibold text-lg'>Ver servicio</button> */}
            <button className='border-2 border-[#019EDD] p-4 w-[10rem] h-[3rem] flex items-center justify-center text-[#019EDD] font-semibold text-lg'>Ver servicio</button>
          </div>
        </div>

      </div>
      {/* <div className=' h-[20vh] flex items-center justify-center'><BsArrowDownCircle className='text-[4rem] text-sky-500'/></div> */}
    </div>
  )
}

export default Hero

// import React from 'react'
// import { BsArrowDownCircle, BsInstagram } from 'react-icons/bs'
// const Hero = () => {
//   return (
//     <div className=' bg-slate-200 flex flex-col items-center '>
//     {/* <div className='h-screen bg-slate-200 flex flex-col items-center ' style={{backgroundImage:'url(back_001.jpg)', backgroundSize:'cover'}}> */}
//       <div className=" md:flex md:items-center md:justify-between mx-auto md:px-[3%] lg:px-[6.5%] xl:px-[15%]  m-[2rem] pt-[4rem] ">
//       {/* <div className=" h-[70%] w-[80%] flex items-center justify-evenly m-[4rem] pt-[4rem]  "> */}

//         <div className='lg:w-[40%] flex items-center justify-center m-4 p-4 '>
//           <img src="Logo_Vertical.png" alt="" className='md:w-[200px] w-[100px]' />
//         </div>
        
//         <div className="lg:w-[60%] flex flex-col items-centerr z-0 gap-8 px-4">
//           <div className='flex flex-col gap-4'>
//             <h1 className=' md:text-3xl sm:text-3xl text-2xl font-bold py-2  ' >Soluciones Topograficas </h1>
//             <h2 className=' md:text-lg sm:text-2xl text-xl font-medium py-0  ' >Realizamos trabajos de Agrimensura,<br/> topografia y cartografia, para saver mas </h2>
//           </div>
//           <div className='flex gap-2 w-full'>
//             <a  href='#contacto' className='bg-sky-300 p-3 rounded-full'>Pedir Cotizacion</a> 
//             <button className='bg-sky-300 p-3 rounded-full'><BsInstagram/></button>    
//           </div>
//         </div>

//       </div>
//       {/* <div className=' h-[20vh] flex items-center justify-center'><BsArrowDownCircle className='text-[4rem] text-sky-500'/></div> */}
//     </div>
//   )
// }

// export default Hero
