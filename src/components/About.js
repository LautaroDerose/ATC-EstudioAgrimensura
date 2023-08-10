import React from 'react'
import { MdEngineering } from 'react-icons/md'
import { MdGroups2 } from 'react-icons/md'
import { BsInfoCircleFill } from 'react-icons/bs'
import { TitleText } from './CustomText'
const About = () => {
  return (
    
      <div className='pt-16'>
        {/* <div className='flex items-center top-10 justify-center my-4'><TitleText title={<>Sobre nosotros</>} textStyles="text-center" /></div> */}
        <h1 className=' lg:w-[40%] font-extrabold md:text-3xl text-2xl text-[#019EDD] flex justify-center py-4 mb-4 mx-auto border-b-4 border-[#019EDD] ' >Sobre nosotros</h1>

        <div className=' grid lg:grid-cols-2 bg-slate-100 h-[60%] max-w-[1240px] m-auto drop-shadow-lg shadow-lg'>
        
        <div className='p-4 mx-4 flex flex-col items-center justify-center'>
          <div className='w-[70%] mx-auto m-4 '><img src="logo1.png" alt="" /></div>
          <div><p className='text-sm m-4 text-center mx-auto '>ATC es un estudio de agrimensura y topografía que presta servicios tanto en la Ciudad Autónoma de Buenos Aires como en la Provincia de Buenos Aires, creado por joven profesional formado en la Universidad Nacional de La Plata y con experiencia en el desarrollo de la actividad profesional en forma independiente durante el transcurso de sus estudios.</p></div>
          <div>Antonio Fernndez Arias</div>
          <h3>Ing. Agrimensor</h3>
        </div>

        <div className='bg-sky-200 p-8 flex flex-col justify-center gap-8 '>
          <div>
            <h1 className='text-xl font-bold text-center border-b-2 border-sky-800 mb-2 py-2 '>Calidad</h1>
            <p>Contamos con instrumental de medición de última generación que nos permite generar productos que cumplen con los estándares de precisión actuales, optimizando tiempos y asegurando la calidad del trabajo.</p>
          </div>
          <div>
            <h1 className='text-xl font-bold text-center border-b-2 border-sky-800 mb-2 py-2 '>Compromiso</h1>
            <p>Estamos comprometidos en la búsqueda de la solución más apta según las necesidades del cliente, velando por sus intereses económicos y ofreciéndole asesoramiento a través de una comunicación directa, personal y eficiente.</p>
          </div>
          <div>
            <h1 className='text-xl font-bold text-center border-b-2 border-sky-800 mb-2 py-2 '>Seguridad</h1>
            <p>Teniendo en cuenta que nuestros servicios pueden llegar a tener consecuencias legales o financieras significativas, realizamos una verificación y control de calidad antes de la entrega de los resultados finales, de manera de garantizar su exactitud y coherencia, brindando seguridad al cliente.</p>
          </div>
        </div>

      </div>
      </div>

  )
}

export default About

// <div className='  flex items-center justify-center py-4 '>
//             <MdEngineering className='text-[100px] text-[#019EDD]'/>    
//         </div>
//         <div className='  flex items-center justify-center py-4 '>
//             <BsInfoCircleFill className='text-[100px] text-[#019EDD]'/>    
//         </div>
//         <div className='  flex items-center justify-center py-4 '>
//             <MdGroups2 className='text-[100px] text-[#019EDD]'/>    
//         </div>
//         <div className='  flex items-center justify-center py-4 '>
//             <MdEngineering className='text-[100px] text-[#019EDD]'/>    
//         </div>
//          <div className=' bg-slate-700 flex items-center justify-center py-4 '><div className='min-w-[200px] min-h-[200px] rounded-full bg-black flex items-center justify-center'>
//             <MdEngineering className='text-[100px] text-white'/>    
//         </div></div>
//         <div className=' bg-slate-700 flex items-center justify-center py-4 '><div className='min-w-[200px] min-h-[200px] rounded-full bg-black flex items-center justify-center'>
//             <BsInfoCircleFill className='text-[100px] text-white'/>    
//         </div></div>
//         <div className=' bg-slate-700 flex items-center justify-center py-4 '><div className='min-w-[200px] min-h-[200px] rounded-full bg-black flex items-center justify-center'>
//             <MdGroups2 className='text-[100px] text-white'/>    
//         </div></div>
//         <div className=' bg-slate-700 flex items-center justify-center py-4 '><div className='min-w-[200px] min-h-[200px] rounded-full bg-black flex items-center justify-center'>
//             <MdEngineering className='text-[100px] text-white'/>    
//         </div></div> 
//          <div className=' bg-slate-700 '><img src="perfil_ig_002 py-4.png" alt="" /></div>
//         <div className=' bg-slate-700 '><img src="perfil_ig_002.png" alt="" /></div>
//         <div className=' bg-slate-700 '><img src="perfil_ig_002.png" alt="" /></div> 