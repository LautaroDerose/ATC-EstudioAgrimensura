import { motion } from "framer-motion";
import styles from '../styles';
import { fadeIn } from '../utils/motion'
import { TitleText, TypingText } from "./CustomText";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";


const SliderCard = ({ id, imgUrl, title, index, active, handleClick, description, toLink }) => {

  const [isVisible, setIsVisible] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    let timeout;
    if (active === id) {
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 400);
    } else {
      setIsVisible(false);
    }

    return () => clearTimeout(timeout);
  }, [active, id]);

  return (
    <>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${
          active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
        onClick={() => handleClick(id)}
      >
        <img 
          src={imgUrl}
          alt={title}
          className="absolute w-full h-full object-cover"
        />
        {active !== id ? (
          <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
            {title}
          </h3>
        ) : (
          <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)]">
            <h2 className="mt-[24px] font-semibold text-[24px] text-[#019EDD]">
              {title}
            </h2>
            {isVisible && (
              <>
                <TitleText title={<>
                  <p className="font-semibold text-sm text-white">{description}</p>
                  <button onClick={handleOpenModal} className=" flex mt-4 text-[1rem] text-[#019EDD] underline"> Leer mas</button>
                </>}  />
                {/* <TypingText title={<Link>Leer mas</Link>} textStyles="text-center" /> */}
                
              </>
            )}
          </div>
        )}
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <div  >
        {/* <img src={imgUrl} alt="" /> */}
        <h1 className="font-bold text-[#019EDD] py-4">{title}</h1>
        <p>{description}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, ratione dolorum. Et dolores similique architecto culpa, fugit magnam, omnis incidunt optio voluptate fugiat vitae repudiandae illo expedita dolorum, repellat quos numquam? Aliquid deleniti quaerat, consectetur laudantium architecto nobis dicta quos ipsum. Voluptates corporis reiciendis debitis maiores veniam labore praesentium ab commodi neque, autem perferendis vel molestias quae impedit tenetur totam. Reiciendis eaque quidem quas aspernatur quos itaque amet dolore fugit dicta nesciunt aut magnam, suscipit nemo praesentium, iure porro labore quaerat laboriosam tempore ut provident magni ullam, iusto nulla. Ea a qui, magni suscipit nihil sunt asperiores porro minima tempora ad rem architecto natus obcaecati, ipsum fugiat quam temporibus illum, corrupti quia soluta accusantium hic debitis molestiae. Sunt sint alias animi aut laborum omnis ab nemo ducimus ipsum voluptatum, nesciunt vel repudiandae. Dignissimos, pariatur eligendi quod est illum aperiam repellat corporis? Cumque, ducimus rerum. Est cupiditate totam ut velit, repellat quod adipisci dicta consequatur illum debitis voluptas numquam, hic odit molestiae similique veritatis ullam quam mollitia, quos eligendi voluptates officiis. Voluptate optio laboriosam temporibus nam quo ad iusto animi, repudiandae incidunt a sunt rerum, labore deleniti reprehenderit. Dolor libero quod cum, minima accusamus id impedit doloremque blanditiis quisquam. Mollitia, corrupti!</p>
      </div>
    </Modal>
    </>
  );
};

export default SliderCard;
