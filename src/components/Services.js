import React from 'react'
import { moreServices } from '../constants/Index'

const Services = (id, title, toLink, imgUrl, description) => {
  return (
    <section className=' max-w-[1240px] mx-auto'>
      <div className='flex flex-wrap  '>
        {
          moreServices.slice(3).map((item) => (
            <div className='lg:w-[30%] md:w-[45%] p-3 mx-2'>
              <h2 className='font-bold text-[16px] text-[#019EDD] mb-4  '>{item.title}</h2>
              {/* <img src={item.imgUrl} alt="" /> */}
              <p className='font-base text-sm '>{item.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services



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