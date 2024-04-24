import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const WtspButton = () => {
  return (
    <div className='' >
      <a 
        href='https://api.whatsapp.com/send/?phone=5491131929640'
        className='btn-arrowDown '
      >
        <FaWhatsapp className='mx-auto my-auto text-white text-2xl  md:text-5xl z-50 '  />
      </a>
    </div>
  )
}

export default WtspButton


// import React from 'react'
// import { FaWhatsapp } from "react-icons/fa6";

// const WtspButton = () => {
//   return (
//     <div className='' >
//       <a 
//         href='https://api.whatsapp.com/send/?phone=5491131929640'
//         className='btn-arrowDown fixed w-10 md:w-20 h-10 md:h-20 m-5 md:m-10 bg-[#25D366] rounded-full right-1 bottom-1 flex items-center justify-center shadow-lg drop-shadow-lg z-50'
//       >
//         <FaWhatsapp className='mx-auto my-auto text-white text-2xl  md:text-5xl '  />
//       </a>
//     </div>
//   )
// }

// export default WtspButton
