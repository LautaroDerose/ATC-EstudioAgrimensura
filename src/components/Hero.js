import React from 'react'
import '../App.css';
// import backImage1 from '../assets/fondo-byn-002.png'
// import backImage1 from '../assets/fondo-01.jpg'
// import backImage2 from '../assets/fondo-02.jpg'


const Hero = () => {

  return (
    <div className='bg-slate-200 flex flex-col w-screen justify-center py-14'>
      {/* <div className='absolute '>
        <img src={backImage1} alt="" className='relative z-0 grayscale-[100%] object-cover overflow-hidden  ' />
      </div> */}
      <div className=" md:flex md:items-center gap-8 mx-auto px-[6.5%] pt-[4rem] z-10 ">
        <div className=' flex items-center justify-center m-4 p-4 '>
          <img src="Logo_Vertical.png" alt="" className='md:w-[200px] w-[100px]' />
        </div>
        <div className="lg:w-[60%]  flex flex-col z-0 gap-8 ">
          <div className='flex flex-col '>
            <h4 className='text-[16px]'>ATC | Agrimensura</h4>
            <h1 className='  text-2xl font-bold py-1 mb-1 ' >Soluciones integrales de <br />agrimensura y topografía </h1>
            <h2 className=' text-[12px]  md:text-sm font-medium py-0  '>  Buscamos tu mejor solución a través de nuestros servicios, <br />con calidad, compromiso y seguridad como estandartes. </h2>
          </div>
          <div className='flex w-full gap-8'>
            <div className=' flex items-center justify-center p-4 h-[3rem] btn-hero bg-[#019EDD] text-white hover:text-[#032433] hover:-translate-y-1 duration-300'>
              <a href='#contacto' className=' icon font-semibold '>Pedir cotización</a>
            </div>
            <a href='#servicios' className=' p-4 h-[3rem] font-semibold flex items-center justify-center border-2 border-[#019EDD] text-[#019EDD] hover:text-[#032433] hover:bg-[#019EDD] hover:-translate-y-1 duration-300 '>Ver servicios</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero

