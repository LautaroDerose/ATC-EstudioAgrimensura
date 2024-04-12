import React, { useState } from 'react'
import { moreServices } from '../constants/Index'

const Services = () => {
  const [showDescriptions, setShowDescriptions] = useState({});
  const handleDescriptionClick = (itemId) => {
    setShowDescriptions(prevState => ({
      [itemId]: !prevState[itemId]
    }));
  };

  return (
    <section className='max-w-[1240px] mx-auto my-8 pt-16 pb-16'>
      <h1 className=' lg:w-[40%] font-extrabold md:text-3xl text-2xl text-[#019EDD] flex justify-center py-4 mb-4 mx-auto border-b-4 border-[#019EDD] ' >Servicios</h1>
      <div className='grid md:grid-cols-2 '>
        {/* Column 1 */}
        <div>
          {
            moreServices.map(
              (item, index) =>
                index % 2 === 0 && (
                  <div className={`p-3 my-2 mx-2 shadow-md  text-slate-800 hover:text-slate-100 hover:bg-[#019EDD] cursor-pointer 
                  ${showDescriptions[item.id] ? 'bg-[#019EDD] text-slate-100' : ''}`}
                    key={item.id} onClick={() => handleDescriptionClick(item.id)}>
                    <h2
                      className='font-extrabold text-[18px] border-b-2  border-[#019EDD] hover:border-[#019EDD] mb-2 px-3 py-2 uppercase cursor-pointer'
                    >
                      {item.title}
                    </h2>
                    <div
                      className='description-container'
                      style={{
                        display: showDescriptions[item.id] ? 'block' : 'none', transition: 'display 0.3s ease'
                      }}
                    >
                      <p className='font-medium text-lg text-slate-100'>{item.description}</p>
                    </div>
                  </div>
                )
            )
          }
        </div>
        {/* Column 2 */}
        <div>
          {
            moreServices.map(
              (item, index) =>
                index % 2 === 1 && (
                  <div className={`p-3  my-2 mx-2 shadow-md  text-slate-800 hover:text-slate-100 hover:bg-[#019EDD] cursor-pointer 
                  ${showDescriptions[item.id] ? 'bg-[#019EDD] text-slate-100' : ''}`}
                    key={item.id} onClick={() => handleDescriptionClick(item.id)}>
                    <h2
                      className='font-extrabold text-[18px] border-b-2  border-[#019EDD] hover:border-[#019EDD] mb-2 px-3 py-2 uppercase cursor-pointer'

                    >
                      {item.title}
                    </h2>
                    <div
                      className='description-container'
                      style={{
                        display: showDescriptions[item.id] ? 'block' : 'none', transition: 'display 0.3s ease'
                      }}
                    >
                      <p className='font-medium text-lg text-slate-100'>{item.description}</p>
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