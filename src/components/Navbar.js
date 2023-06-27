import React, {useEffect, useState} from 'react';
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {navLinks} from '../constants/Index'


const Navbar = () => {
 const links = navLinks;
  const [nav, setNav] = useState(false)

  const handleNav = () => {
     setNav(!nav)
  }

  const[scrolled, setScrolled] = useState(false);
    
  useEffect(()=>{
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        document.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll)
        };
    },[]);


  return (


        // <div className={`fixed w-[100%] z-10 top-0 flex justify-between items-center h-16 mx-auto md:px-[2rem] lg:px-[15%] ${scrolled ? '  bg-[#032433] h-[10vh] z-50 duration-300' :' pt-10'} `}>  
        <div className=' fixed w-screen bg-black z-10 top-0  flex justify-between items-center h-16  mx-auto px-4 md:px-[2rem] lg:px-[15%] text-white'> 

                
          <div className=''> <img src={`${scrolled ? "logoIcon_Wcolor_transparent.png" : "logoIcon_white_transparent.png" }`} alt="" className='w-[4rem] duration-300' /></div>
          <div className='hidden md:flex'>
            {
                links.map((item)=> (
                    <a
                        className={`text-white p-4 text-xl font-bold hover:scale-200 hover:text-[#019EDD] hover:-translate-y-1 duration-300 ${scrolled ? '' : ''} `}
                        href={item.toLink}
                        key={item.id}
                    >
                        {item.label}
                    </a>   
                ))
            }
          </div>
        
        <div onClick={handleNav} className='block md:hidden'> 
          {nav ? <AiOutlineClose size={20} className='text-gray-400' /> : <AiOutlineMenu size={20} className='text-gray-400'/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
            <div className='w-[50%] p-4'> <img src="Logo2.png" alt="" className='w-full' /></div>
            <div className='p-4 uppercase '>    
                {
                    navLinks.map((item)=> (
                        <div className={nav ? 'p-4 text-gray-400 hover:text-emerald-500 border-b border-gray-600': 'hidden'}>
                            {/* <a
                            className='focus:outline-none focus:text-emerald-500'
                            href={item.toLink}
                            key={item.id}
                        >
                            {item.label}
                        </a>    */}
                        <Link
                            className='focus:outline-none focus:text-emerald-500'
                            to={item.toLink}
                            key={item.id}
                        >
                            {item.label}
                        </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar




// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// const navLinks = [
//     {
//         id:1,
//         label:"Home",
//         toLink:"/"
//     },
//     {
//         id:2,
//         label:"servicios",
//         toLink:"#servicios"
//     },
//     {
//         id:3,
//         label:"Nosotros",
//         toLink:"#nosotros"      
//     },
//     {
//         id:4,
//         label:"Contacto",
//         toLink:"#contacto"
//     },
//     {
//         id:5,
//         label:"Consultas Frecuentes",
//         toLink:"/faq"
//     },
   
//   ]

// const Navbar = () => {

//     // const[scrolled, setScrolled] = useState(false);
//     // useEffect(()=>{
//     //     const handleScroll = () => {
//     //         const isScrolled = window.scrollY > 0;
//     //         setScrolled(isScrolled);
//     //     };
//     //     document.addEventListener('scroll',handleScroll);
//     //     return () => {
//     //         window.removeEventListener('scroll',handleScroll)
//     //     };
//     // },[]);

//     const [nav, setNav] = useState(false)

//     const handleNav = () => {
//         setNav(!nav)
//     }

//   return (
//     // <div className={`  transition duration-500 ease-in-out ${scrolled ? 'stickyNav fixed w-screen bg-black flex justify-center h-[8vh] z-50' : 'hidden'}`} >
//     <div className='bg-black fixed flex justify-center w-screen h-[10vh] z-50'>
//         <nav className='w-[1000px] flex justify-between items-center'>
//             {/* <div className={` ${scrolled ? 'h-[90%] p-6' : '' }`}>
//                 <img src="perfil_ig_002.png" alt="" />
//             </div> */}
//             <img src="perfil_ig_002.png" alt="" className='w-[4rem]' />
//             <div>
//             {
//                 navLinks.map((item)=> (
//                     <a
//                         className='text-white p-4 font-bold hover:text-[#019EDD] duration-300'
//                         href={item.toLink}
//                         key={item.id}
//                     >
//                         {item.label}
//                     </a>
//                     // <NavLink className=' text-white p-4 font-bold hover:text-[#019EDD] duration-300 ' to={item.toLink} key={item.id} >{item.label}</NavLink>     
//                 ))
//             }
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar
