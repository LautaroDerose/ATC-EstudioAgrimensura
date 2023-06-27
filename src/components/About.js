import React from 'react'
import { MdEngineering } from 'react-icons/md'
import { MdGroups2 } from 'react-icons/md'
import { BsInfoCircleFill } from 'react-icons/bs'
import { TitleText } from './CustomText'
const About = () => {
  return (
    
      <div>
        <div className='flex items-center justify-center my-4'><TitleText title={<>Sobre nosotros</>} textStyles="text-center" /></div>
        <div className=' grid lg:grid-cols-2 bg-slate-100 h-[60%] max-w-[1240px] m-auto drop-shadow-lg shadow-lg'>
        
        <div className='p-4 mx-4 flex flex-col items-center justify-center'>
          <div className='w-[70%] mx-auto m-4 '><img src="logo1.png" alt="" /></div>
          <div><p className='text-sm m-4 text-center mx-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia distinctio delectus repudiandae dignissimos corporis animi maiores beatae laborum, placeat voluptatem dolores nulla eius tempore deleniti blanditiis provident dolorem quidem iusto rerum, deserunt neque. Molestiae voluptatem repudiandae blanditiis non.</p></div>
        </div>

        <div className='bg-sky-200 p-8 flex flex-col justify-center gap-8 '>
          <div>
            <h1 className='text-xl font-bold text-center border-b-2 border-sky-800 mb-2 py-2 '>Calidad</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque distinctio eligendi doloribus voluptates maxime laboriosam quo, commodi, quidem eum suscipit temporibus error sequi odit molestias molestiae doloremque tempora saepe dolores.</p>
          </div>
          <div>
            <h1 className='text-xl font-bold text-center border-b-2 border-sky-800 mb-2 py-2 '>Compromiso</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque distinctio eligendi doloribus voluptates maxime laboriosam quo, commodi, quidem eum suscipit temporibus error sequi odit molestias molestiae doloremque tempora saepe dolores.</p>
          </div>
          <div>
            <h1 className='text-xl font-bold text-center border-b-2 border-sky-800 mb-2 py-2 '>Seguridad</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque distinctio eligendi doloribus voluptates maxime laboriosam quo, commodi, quidem eum suscipit temporibus error sequi odit molestias molestiae doloremque tempora saepe dolores.</p>
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