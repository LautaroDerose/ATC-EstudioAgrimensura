import React from 'react'
import Contact from './Contact'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='lg:h-[70vh] w-screen bg-sky-950 flex flex-col'>
      
      <div className='md:p-0 p-8'>
        <Contact />
      </div>
    
    {/* <div className='w-[80%]  gap-4 justify-center mt-4 mx-auto mb-8 lg:mb-0'>    
      <div className='max-w-[1240px] gap-8 mt-6 lg:flex-row flex flex-col lg:items-start items-center'>
        <div className='md:w-2/4  m-auto lg:mr-8'>
          <img src="/Logo2.png" alt="ATC | Agrimensura" className='' />
        </div>
        <div className='lg:w-2/4 '>
          <h3 className='text-[#019EDD] font-bold'>Servicios</h3>
          <ul>
            <li><a href="" className='text-[#cccccc]'>Estados Parcelarios</a></li>
            <li><a href="" className='text-[#cccccc]'>Mensura</a></li>
            <li><a href="" className='text-[#cccccc]'>Propiedad Horizontal</a></li>
            <li><a href="" className='text-[#cccccc]'>Levantamientos Planimetricos</a></li>          
          </ul>
        </div>
        <div className='lg:w-2/4 '>
          <h3 className='text-[#019EDD] font-bold'>Clientes</h3>
          <ul>
            <li><a href="" className='text-[#cccccc]'>Ejemplo-1</a></li>
            <li><a href="" className='text-[#cccccc]'>Ejemplo-2</a></li>
            <li><a href="" className='text-[#cccccc]'>Ejemplo-3</a></li>
            <li><a href="" className='text-[#cccccc]'>Ejemplo-4</a></li>          
          </ul>
        </div>
        <div className='lg:w-2/4 '>
          <h3 className='text-[#019EDD] font-bold'>Contacto</h3>
          <ul>
            <div className='flex gap-2'>
              <span className='justify-center block text-base mb-2 text-palette1' ><HiMail className='flex justify-center items-center text-3xl text-[#cccccc] '/></span>
              <span href='#' className='justify-center block text-base mb-2 text-[#cccccc] font-bold '>lautiderose@gmail.com</span>
            </div>
            <div className='flex gap-2 '>            
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antonio-fernar/" className='justify-center block md:text-base text-xs mb-2 text-[#cccccc]' ><i><FaLinkedin className='flex justify-center items-center text-3xl'/></i></a>
              <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/antonio-fernar/' className='justify-center block md:text-base text-xs mb-2 text-[#cccccc] font-bold hover:underline' >linkedin.com/AntonioFernandez</a>
            </div>         
          </ul>
        </div>
      </div>
    </div> */}

    <div className="w-[80%] gap-4 justify-center mt-4 mx-auto mb-8 lg:mb-0">
      <div className="max-w-[1240px] gap-8 mt-6 lg:flex-row flex flex-col lg:items-start items-center">
        <div className="md:w-1/2">
          <img src="/Logo2.png" alt="ATC | Agrimensura" className=""/>
        </div>
        <div className="md:w-1/2 lg:flex lg:flex-row flex-col">
          <div className='lg:flex lg:gap-12 '>
            <div className="lg:w-1/2">
              <h3 className="text-[#019EDD] font-bold">Servicios</h3>
              <ul>
                <li><a href="/" className="text-[#cccccc]">Estados Parcelarios</a></li>
                <li><a href="/" className="text-[#cccccc]">Mensura</a></li>
                <li><a href="/" className="text-[#cccccc]">Propiedad Horizontal</a></li>
                <li><a href="/" className="text-[#cccccc]">Levantamientos Planimetricos</a></li>          
              </ul>
            </div>
            <div className="lg:w-1/2 mx-auto mt-6 lg:mt-0">
              <h3 className="text-[#019EDD] font-bold">Clientes</h3>
              <ul>
                <li><a href="/" className="text-[#cccccc]">Ejemplo-1</a></li>
                <li><a href="/" className="text-[#cccccc]">Ejemplo-2</a></li>
                <li><a href="/" className="text-[#cccccc]">Ejemplo-3</a></li>
                <li><a href="/" className="text-[#cccccc]">Ejemplo-4</a></li>          
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-[#019EDD] font-bold">Contacto</h3>
          <ul>
            <div className="flex gap-2">
              <span className="justify-center block text-base mb-2 text-palette1">
                <HiMail className="flex justify-center items-center text-3xl text-[#cccccc]"/>
              </span>
              <span href="#" className="justify-center block text-base mb-2 text-[#cccccc] font-bold">lautiderose@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antonio-fernar/" className="justify-center block md:text-base text-xs mb-2 text-[#cccccc]">
                <i><FaLinkedin className="flex justify-center items-center text-3xl"/></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antonio-fernar/" className="justify-center block md:text-base text-xs mb-2 text-[#cccccc] font-bold hover:underline">linkedin.com/AntonioFernandez</a>
            </div>         
          </ul>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Footer
