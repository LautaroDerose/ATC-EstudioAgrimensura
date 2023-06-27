// import React, { useEffect, useState } from 'react'
// import {IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
// import { FaRegDotCircle} from 'react-icons/fa'

// const slides = [
//   'slider/picada_1.jpg',
//   'slider/picada_2.jpg',
//   'slider/picada_3.jpg',
//   'slider/picada_4.jpg',
//   'slider/topo.jpg',
// ]

// const styles = {
//   slides:{
//     width: "500px",
//     height: "300px",
//     borderRadius: "10px",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   slidesOpacity:{
//     width: "400px",
//     height: "250px",
//     borderRadius: "10px",
//     backgroundSize: "cover",
//     opacity: '50%'
//   },
  
// }

// const Slider = ({ autoSlide=false, autoSlideInterval=1000}) => {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
//   const nextIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;

//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   }
//   const goToPrev = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   }
  
//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   }
//   const slideWithBcakground = {
//     ...styles.slides, 
//     backgroundImage:`url(${slides[currentIndex]})`,
//   }
//   const slideOpacityLeft = {
//     ...styles.slidesOpacity, 
//     backgroundImage: `url(${slides[prevIndex]})`,
//         // backgroundImage:`url(${slides[currentIndex - 1]})`,

//     left: '-50%',
//   }
//   const slideOpacityRight = {
//     ...styles.slidesOpacity, 
//     backgroundImage: `url(${slides[nextIndex]})`,
//         // backgroundImage:`url(${slides[currentIndex + 1]})`,
//     left: '50%',
//   }

//   return (
//     <div  className='relative h-full p-6 mb-10 flex justify-center '>
//       <div onClick={goToPrev} className='flex items-center justify-center z-20' ><IoIosArrowBack className='text-3xl'/></div>

//       <div className='w-[1200px] h-[50vh] flex flex-col'>
//         <div className='flex items-center h-[50vh] gap-2'>
//           <div style={slideOpacityLeft} className=' z-20 ' ></div>
//           <div style={slideWithBcakground} className=' z-10 ' ></div>
//           <div style={slideOpacityRight} className=' z-20 ' ></div>
//         </div>
//         {/* <div style={slideWithBcakground} ></div> */}

//         <div  className='flex justify-center' >
//           {
//             slides.map((slide, slideIndex) => (
//               <div
//                 className='my-2 cursor-pointer text-xl'
//                 key={slideIndex}
//                 onClick={() => goToSlide(slideIndex)}
//               >
//                 <p className={ currentIndex === slideIndex ?`text-teal-400 duration-200` : 'gray'}>●</p>
//               </div>
//             ))
//           }
//         </div>
//       </div>

//       <div onClick={goToNext} className='flex items-center justify-center z-20' ><IoIosArrowForward className='text-3xl'/></div>
//     </div>
//   )
// }

// export default Slider

import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import  {BsCircleFill}  from 'react-icons/bs';

const slides = [
  'slider/picada_1.jpg',
  'slider/picada_2.jpg',
  'slider/picada_3.jpg',
  'slider/picada_4.jpg',
  'slider/topo.jpg',
];

const Slider = ({ autoSlide = false, autoSlideInterval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideWithBackground = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  const slideOpacityLeft = {
    width: '50%',
    height: '90%',
    opacity:'80%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[prevIndex]})`,
  };

  const slideOpacityRight = {
    width: '50%',
    height: '90%',
    opacity:'80%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[nextIndex]})`,
  };

  return (
    <div className='relative h-full w-[80vw] p-6 mb-10 mx-auto flex justify-center'>
      <div onClick={goToPrev} className='flex items-center justify-center z-20'>
        <IoIosArrowBack className='text-3xl' />
      </div>

      <div className='w-full  h-[50vh] mx-auto'>
        <div className='flex items-center h-[50vh] gap-2'>
          <div style={slideOpacityLeft} className='w-1/3 md:w-auto lg:block hidden '/>
          <div style={slideWithBackground} className='w-1/3' />
          <div style={slideOpacityRight} className='w-1/3 md:w-auto lg:block hidden '/>
        </div>

        <div className='flex justify-center'>
          {slides.map((slide, slideIndex) => (
            <div
              className='my-2 cursor-pointer text-xl'
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <BsCircleFill
                className={` mx-2 ${currentIndex === slideIndex ? 'text-teal-600 duration-200' : 'text-teal-200'}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div onClick={goToNext} className='flex items-center justify-center z-20'>
        <IoIosArrowForward className='text-3xl' />
      </div>
    </div>
  );
};

export default Slider;