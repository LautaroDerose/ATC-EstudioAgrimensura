import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../constants/Index'


const Navbar = () => {
    const links = navLinks;
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);


    return (


        <nav className=' fixed w-screen bg-black z-50 top-0  flex justify-between items-center h-16  mx-auto px-4 md:px-[2rem] lg:px-[15%] text-white'>
            <a href='/' className='w-[50px] border-2 border-white hover:border-[#019EDD] rounded-full'> <img src={`${scrolled ? "logoIcon_Wcolor_transparent.png" : "logoIcon_white_transparent.png"}`} alt="" className='w-[4rem] duration-300' /></a>
            <div className='hidden md:flex'>
                {
                    links.map((item) => (
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
                {nav ? <AiOutlineClose size={20} className='text-gray-400' /> : <AiOutlineMenu size={20} className='text-gray-400' />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
                <div className='w-[50%] p-4'> <img src="Logo2.png" alt="" className='w-full' /></div>
                <div className='p-4 uppercase '>
                    {
                        navLinks.map((item) => (
                            <div className={nav ? 'p-4 text-gray-400 hover:text-[#019EDD] border-b border-gray-600' : 'hidden'}>
                                <a
                                    className='focus:outline-none focus:text-[#019EDD]'
                                    href={item.toLink}
                                    key={item.id}
                                >
                                    {item.label}
                                </a>

                            </div>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
