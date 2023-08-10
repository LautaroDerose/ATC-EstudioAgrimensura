import React from 'react'
import Contact from './Contact'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaPhoneSquareAlt } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className=' pb-16 w-screen bg-sky-950 flex flex-col '>
      <div className='md:p-0 p-8'>
        <Contact />
      </div>      
      <div className=" gap-4 justify-center mt-4  mb-8 lg:mb-0">
        <div className="max-w-[1240px] h-[100%] mx-auto gap-8 mt-6 lg:flex-row flex flex-col  items-center">
          <div className="md:w-1/2">
            <div className='flex justify-end lg:mt-8 '>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4020.8509589732143!2d-58.42919652358097!3d-34.58227520486341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5856aae7333%3A0x7eb0c470594d77f8!2sParaguay%204831%2C%20C1425BSU%20CABA!5e0!3m2!1ses!2sar!4v1691696943464!5m2!1ses!2sar" width="100%" height="100%"  allowfullscreen="" loading="lazy"  title='zona palermo' referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-[#019EDD] text-2xl font-bold mb-2">Contacto</h3>
            <ul>
              <div className="flex gap-2 items-center text-[#cccccc] hover:text-[#019EDD] ">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/atcagrimensura/" className="justify-center block md:text-base text-xs mb-2  ">
                  <i><FaLinkedin className="flex justify-center items-center text-3xl"/></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/atcagrimensura/" className="justify-center block md:text-base text-xs mb-2  font-bold hover:underline">linkedin.com/company/atcagrimensura</a>
              </div>         
              <div className="flex gap-2 items-center">
                <span className="justify-center block text-base mb-2 text-palette1">
                  <HiMail className="flex justify-center items-center text-3xl text-[#cccccc]"/>
                </span>
                <span href="#" className="justify-center block text-base mb-2 text-[#cccccc] font-bold">atcagrimensura@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="justify-center block text-base mb-2 text-palette1">
                  <FaPhoneSquareAlt className="flex justify-center items-center text-3xl text-[#cccccc]"/>
                </span>
                <span href="#" className="justify-center block text-base mb-2 text-[#cccccc] font-bold">+549 11 31929640</span>
              </div>
              <div className="flex gap-2 items-center text-[#cccccc] hover:text-[#019EDD] ">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/atcagrimensura/?igshid=NjIwNzIyMDk2Mg%3D%3D" className="justify-center block md:text-base text-xs mb-2  ">
                  <i><FaInstagram className="flex justify-center items-center text-3xl"/></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/atcagrimensura/?igshid=NjIwNzIyMDk2Mg%3D%3D" className="justify-center block md:text-base text-xs mb-2  font-bold hover:underline">@atcagrimensura</a>
              </div>         
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer




// import React from 'react'
// import Contact from './Contact'
// import { HiMail } from 'react-icons/hi'
// import { FaLinkedin } from 'react-icons/fa'
// import { moreServices } from '../constants/Index'
// const Footer = () => {
//   return (
//     <div className='lg:h-[80vh] w-screen bg-sky-950 flex flex-col'>
      
//       <div className='md:p-0 p-8'>
//         <Contact />
//       </div>
    
//     {/* <div className='w-[80%]  gap-4 justify-center mt-4 mx-auto mb-8 lg:mb-0'>    
//       <div className='max-w-[1240px] gap-8 mt-6 lg:flex-row flex flex-col lg:items-start items-center'>
//         <div className='md:w-2/4  m-auto lg:mr-8'>
//           <img src="/Logo2.png" alt="ATC | Agrimensura" className='' />
//         </div>
//         <div className='lg:w-2/4 '>
//           <h3 className='text-[#019EDD] font-bold'>Servicios</h3>
//           <ul>
//             <li><a href="" className='text-[#cccccc]'>Estados Parcelarios</a></li>
//             <li><a href="" className='text-[#cccccc]'>Mensura</a></li>
//             <li><a href="" className='text-[#cccccc]'>Propiedad Horizontal</a></li>
//             <li><a href="" className='text-[#cccccc]'>Levantamientos Planimetricos</a></li>          
//           </ul>
//         </div>
//         <div className='lg:w-2/4 '>
//           <h3 className='text-[#019EDD] font-bold'>Clientes</h3>
//           <ul>
//             <li><a href="" className='text-[#cccccc]'>Ejemplo-1</a></li>
//             <li><a href="" className='text-[#cccccc]'>Ejemplo-2</a></li>
//             <li><a href="" className='text-[#cccccc]'>Ejemplo-3</a></li>
//             <li><a href="" className='text-[#cccccc]'>Ejemplo-4</a></li>          
//           </ul>
//         </div>
//         <div className='lg:w-2/4 '>
//           <h3 className='text-[#019EDD] font-bold'>Contacto</h3>
//           <ul>
//             <div className='flex gap-2'>
//               <span className='justify-center block text-base mb-2 text-palette1' ><HiMail className='flex justify-center items-center text-3xl text-[#cccccc] '/></span>
//               <span href='#' className='justify-center block text-base mb-2 text-[#cccccc] font-bold '>lautiderose@gmail.com</span>
//             </div>
//             <div className='flex gap-2 '>            
//               <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antonio-fernar/" className='justify-center block md:text-base text-xs mb-2 text-[#cccccc]' ><i><FaLinkedin className='flex justify-center items-center text-3xl'/></i></a>
//               <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/antonio-fernar/' className='justify-center block md:text-base text-xs mb-2 text-[#cccccc] font-bold hover:underline' >linkedin.com/AntonioFernandez</a>
//             </div>         
//           </ul>
//         </div>
//       </div>
//     </div> */}

//     <div className="w-[80%] gap-4 justify-center mt-4 mx-auto mb-8 lg:mb-0">
//       <div className="max-w-[1240px] gap-8 mt-6 lg:flex-row flex flex-col lg:items-start items-center">
//         <div className="md:w-1/2">
//           {/* <img src="/logo2.png" alt="ATC | Agrimensura" className="lg:px-8"/> */}
//            <div>
//            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26281.729401128057!2d-58.4416150455389!3d-34.57339628284967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c771eb933%3A0x6b3113b596d78c69!2sPalermo%2C%20CABA!5e0!3m2!1ses!2sar!4v1691102543091!5m2!1ses!2sar" width="100%" height="100%"  allowfullscreen="" loading="lazy"  title='zona palermo' referrerpolicy="no-referrer-when-downgrade">
//            </iframe>
//               </div>
//         </div>
//         <div className="md:w-1/2 lg:flex lg:flex-row flex-col">
//           <div className='lg:flex lg:gap-12 '>
//             {/* <div className="lg:w-1/2"> */}
//               {/* <h3 className="text-[#019EDD] font-bold">Servicios</h3> */}
//               {/* <ul>
//                 <li><a href="/" className="text-[#cccccc]">Estados Parcelarios</a></li>
//                 <li><a href="/" className="text-[#cccccc]">Mensura</a></li>
//                 <li><a href="/" className="text-[#cccccc]">Propiedad Horizontal</a></li>
//                 <li><a href="/" className="text-[#cccccc]">Levantamientos Planimetricos</a></li>          
//               </ul> */}

//               {/* <div className='grid md:grid-cols-2'>
//               {
//                 moreServices.map(
//                   (item, index) =>
//                     index % 2 === 0 && ( // Display items with even indices in the first column
//                       <div className=' shadow-md' key={item.id}>
//                         <h2
//                           className=' text-sm text-slate-200 uppercase cursor-pointer'
//                         >
//                           {item.title}
//                         </h2>
//                       </div>
//                     )
//                 )
//               }
//               </div> */}

//             {/* </div> */}
//             {/* <div className="lg:w-1/2 mx-auto mt-6 lg:mt-0">
//               <h3 className="text-[#019EDD] font-bold">Clientes</h3>
             
//               <ul>
//                 <li><a href="/" className="text-[#cccccc]">Ejemplo-1</a></li>
//                 <li><a href="/" className="text-[#cccccc]">Ejemplo-2</a></li>
//                 <li><a href="/" className="text-[#cccccc]">Ejemplo-3</a></li>
//                 <li><a href="/" className="text-[#cccccc]">Ejemplo-4</a></li>          
//               </ul>
//             </div> */}
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <h3 className="text-[#019EDD] font-bold">Contacto</h3>
//           <ul>
//             <div className="flex gap-2">
//               <span className="justify-center block text-base mb-2 text-palette1">
//                 <HiMail className="flex justify-center items-center text-3xl text-[#cccccc]"/>
//               </span>
//               <span href="#" className="justify-center block text-base mb-2 text-[#cccccc] font-bold">atcagrimensura@gmail.com</span>
//             </div>
//             <div className="flex gap-2">
//               <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antonio-fernar/" className="justify-center block md:text-base text-xs mb-2 text-[#cccccc]">
//                 <i><FaLinkedin className="flex justify-center items-center text-3xl"/></i>
//               </a>
//               <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antonio-fernar/" className="justify-center block md:text-base text-xs mb-2 text-[#cccccc] font-bold hover:underline">linkedin.com/AntonioFernandez</a>
//             </div>         
//           </ul>
//         </div>
//       </div>
//     </div>

//     </div>
//   )
// }

// export default Footer
