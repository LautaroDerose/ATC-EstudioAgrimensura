import React, {useState} from 'react'
import { moreServices } from '../constants/Index'

// const Services = (id, title, toLink, imgUrl, description) => {
//   return (
//     <section className=' max-w-[1240px] mx-auto my-8'>
//       <div className='flex flex-wrap justify-between gap-3 '>
//         {
//           moreServices.map((item) => (
//             <div className=' md:w-[45%] p-3 mx-2 shadow-md  '>
//               <h2 className='font-extrabold text-2xl text-slate-800 border-b-2 border-[#019EDD] mb-2 py-2 uppercase '>{item.title}</h2>
//               {/* <img src={item.imgUrl} alt="" /> */}
//               <p className='font-medium text-lg text-slate-600'>{item.description}</p>
//             </div>
//           ))
//         }
//       </div>
//     </section>
//   )
// }

// export default Services


const Services = () => {
  // State to manage the visibility of descriptions
  const [showDescriptions, setShowDescriptions] = useState({});

  // Function to handle the click event and toggle description visibility
  const handleDescriptionClick = (itemId) => {
    setShowDescriptions((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <section className='max-w-[1240px] mx-auto my-8'>
      <h1 className=' lg:w-[40%] font-extrabold md:text-3xl text-2xl text-[#019EDD] flex justify-center py-4 mb-4 mx-auto border-b-4 border-[#019EDD] ' >Servicios de Agrimensura</h1>
      <div className='grid md:grid-cols-2'>
        {/* Column 1 */}
        <div>
          {
            moreServices.map(
              (item, index) =>
                index % 2 === 0 && ( // Display items with even indices in the first column
                  <div className='p-3 mx-2 shadow-md' key={item.id}>
                    <h2
                      className='font-extrabold text-[18px] text-slate-800 border-b-2 border-[#019EDD] mb-2 py-2 uppercase cursor-pointer'
                      onClick={() => handleDescriptionClick(item.id)}
                    >
                      {item.title}
                    </h2>
                    <div
                      className='description-container'
                      style={{
                        display: showDescriptions[item.id] ? 'block' : 'none',
                      }}
                    >
                      <p className='font-medium text-lg text-slate-600'>{item.description}</p>
                    </div>
                  </div>
                )
            )
          }
        </div>
        {/* Column 2 Que tipo de diseno UI le puedo asignar a estos elementos, para que el usuario interprete que si hace click */}
        <div>
          {
            moreServices.map(
              (item, index) =>
                index % 2 === 1 && ( // Display items with odd indices in the second column
                  <div className='p-3 mx-2 shadow-md' key={item.id}>
                    <h2
                      className='font-extrabold text-[18px] text-slate-800 hover:text-[#019EDD] border-b-2 border-[#019EDD] mb-2 py-2 uppercase cursor-pointer'
                      onClick={() => handleDescriptionClick(item.id)}
                    >
                      {item.title}
                    </h2>
                    <div
                      className='description-container'
                      style={{
                        display: showDescriptions[item.id] ? 'block' : 'none',
                      }}
                    >
                      <p className='font-medium text-lg text-slate-600'>{item.description}</p>
                    </div>
                  </div>
                )
            )
          }
        </div>
      </div>
    </section>
  );
};



export default Services;


// import { TitleText, TypingText } from "./CustomText";

// const Services = () => (
//   <sevction>
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{once: 'false', amount: 0.25}}
//       className={`${styles.innerWidth} mx-auto flex flex-col `}
//     >
//       <TypingText title="| Insight" textStyles="text-center" />
//       <TitleText />
//       <div className="mt-[50px] flex flex-col gap-[30px] "> 
//         {
//           insights.map(( service, index ) => (
//             <InsightCard
//               key={`services-${index}`}
//               {...insight}
//               index={ index + 1 }
//             />
//           ))
//         }
//       </div>
//     </motion.div>
//   </sevction>
// )