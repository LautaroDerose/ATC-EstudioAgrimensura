import React from 'react'
// import { NavLink } from 'react-router-dom'
// import {TbBuildingCommunity, TbRulerMeasure} from 'react-icons/tb'
// import {RiFileList2Line} from 'react-icons/ri'
import { useState } from "react";
import { motion } from "framer-motion";
import styles from '../styles/index';
import { staggerContainer } from '../utils/motion'
import  SliderCard  from "./SliderCard";
import {TitleText, TypingText } from "./CustomText";
import {servicesLinks} from '../constants/Index'

const Servicios = () => {
  const [active, setActive] = useState('service-2')

  return (
    <section className={`${styles.paddings}`} id="explore" >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* <TypingText title="Servicios" textStyles="text-center" /> */}
      <div className='flex items-center justify-center'>
        <TitleText title={<>Ofrecemos estos servicios </>} /> 
      </div>
         {/* <TitleText title={<>Ofrecemos estos servicios <br className="md:block hidden"/> vea en detalle </>} textStyles="text-center" />  */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {
            servicesLinks.map((world, index) => (
              <SliderCard 
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Servicios

// const Servicios = () => {
//   return (
//     <div className='max-w-[1240px] flex flex-col justify-center mx-auto md:h-[60vh] p-6 shadow-md '>
//       <h2 className='mx-auto m-6 font-bold text-2xl text-[#019EDD]'>Nuestros Servicios</h2>
//       <div className='mx-auto grid md:grid-cols-4 gap-8'>
//         {
//           servicesLinks.map((item)=> (
//               <NavLink className=' flex flex-col justify-between text-slate-400 p-4 font-bold' to={item.toLink} key={item.id} >
                
//                   <div className='w-[150px] h-[150px] rounded-full bg-[#019EDD] flex items-center justify-center '>
//                    <TbRulerMeasure />
//                    <TbBuildingCommunity />
//                    <RiFileList2Line />
//                   </div>
//                   <div className='flex justify-end '>                  
//                     <h1 className='py-2 w-[150px] border-b-4 text-center text-[12px] ' >{item.label}</h1>
//                   </div>
               
//               </NavLink>     
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Servicios
