

// import React, { useEffect, useState } from 'react';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// const Carousel = ({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
//   current, // Add current as a prop
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(current); // Rename current to currentIndex

//   const prev = () =>
//     setCurrentIndex((currentIndex) =>
//       currentIndex === 0 ? slides.length - 1 : currentIndex - 1
//     );
//   const next = () =>
//     setCurrentIndex((currentIndex) =>
//       currentIndex === slides.length - 1 ? 0 : currentIndex + 1
//     );

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className='max-w-3xl mx-auto'>
//       <div className='relative overflow-hidden'>
//         <div
//           className='flex transition-transform ease-out duration-500'
//           style={{ transform: `translateX(-${current * 100}%)` }}
//         >
//           {slides}
//         </div>

//         <div className='absolute inset-0 flex items-center justify-between p-4'>
//           <button
//             className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'
//             onClick={prev}
//           >
//             <BsChevronLeft size={40} />
//           </button>
//           <button
//             className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-black'
//             onClick={next}
//           >
//             <BsChevronRight size={40} />
//           </button>
//         </div>

//         <div className='absolute bottom-4 right-0 left-0'>
//           <div className='flex items-center justify-center gap-2'>
//             {slides.map((_, i) => (
//               <div
//                 key={i}
//                 className={`
//                   transition-all w-3 h-3 bg-white rounded-full
//                   ${currentIndex === i ? 'p-2' : 'bg-opacity-50'}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;



//EL QUE ANDA BIEN

// import React, { useEffect, useState } from 'react'
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'



// const Carousel = ({children: slides, autoSlide=false, autoSlideInterval = 3000}) => {

//   const[current, setCurrent] = useState(0)

//   const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
//   const next = () => setCurrent((current) => (current === slides.length ? 0 : current + 1))

//   useEffect(() => {
//     if(!autoSlide)return
//     const slideInerval = setInterval(next, autoSlideInterval)
//     return () => clearInterval(slideInerval)
//   }, [])

//   return (
//     <div className=' max-w-lg flex items-center justify-center'>
//       <div className='overflow-hidden relative '>
      
//       <div 
//         className='flex mx-auto transition-transform esae-out duration-500 '
//         style={{transform: `translateX(-${current * 100}%)`}}
//       >
//         {slides}
//       </div>
      
//       <div className='absolute inset-0 flex items-center justify-between p-4' >
//         <button 
//           className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'
//           onClick={prev}  
//         >
//           <BsChevronLeft sixe={40} />
//         </button>
//         <button 
//           className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-black'
//           onClick={next}  
//         >
//           <BsChevronRight sixe={40} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className='flex items-center justify-center gap-2'>
//           {slides.map((_, i) =>(
//             <div className={`
//             transition-all w-3 h-3 bg-white rounded-full
//             ${current === i ? "p-2" : "bg-opacity-50"}
//             `} />
//           ))}

//         </div>
//       </div>

//     </div>
//     </div>
//   )
// }

// export default Carousel

// import React from 'react'
// const slides = [
//   'slider/picada_1.jpg',
//   'slider/picada_2.jpg',
//   'slider/picada_3.jpg',
//   'slider/picada_4.jpg',
//   'slider/topo.jpg',
// ]

// const styles = {
//   carousel:{
//     display: grid,
//     grid-autop-flow:column,
//     scroll-behavior:auto,
//     gap:1.2rem,
//     overflow-y:auto, 
//     overscroll-behavior-x: toContainElement,
//     scroll-snap-type: x mandatory,
//     scrollbar-width:none
//   }
// }
// const styles = {
//   carousel: {
//     display: "grid",
//     gridAutoFlow: "column",
//     scrollBehavior: "auto",
//     gap: "1.2rem",
//     overflowY: "auto",
//     overscrollBehaviorX: "contain",
//     scrollSnapType: "x mandatory",
//     scrollbarWidth: "none"
//   }
// };
// const Carousel = () => {
//   return (
//     <div  className={styles.carousel} >
//       <div>
//         <img src='slider/picada_1.jpg' alt="" />
//         <img src='slider/picada_2.jpg' alt="" />
//         <img src='slider/picada_3.jpg' alt="" />
//         <img src='slider/picada_4.jpg' alt="" />
//         <img src='slider/topo.jpg' alt="" />
//       </div>
//     </div>
//   )
// }

// export default Carousel

