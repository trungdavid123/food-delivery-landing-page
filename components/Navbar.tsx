"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll/modules';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const toggleMenu = useCallback(() => {
    setShowMenu((current) => !current);
    if (!showMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showMenu])

  function removeMenuFromBg() {
    setShowMenu(false);
    document.body.classList.remove('overflow-hidden');
  }



  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos !== 0) {
      setVisible(false)
    } else  {
      setVisible(true)
    }
    setPrevScrollPos(currentScrollPos);
  }




  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  })


  return (
    <nav className={`fixed z-40 w-full transition ${visible ? 'translate-y-0' : '-translate-y-20'} `}>
      <div className={`md:h-auto bg-[#a50413] transition delay-50' ${showMenu ? 'h-screen ' : ''}`} onClick={() => showMenu ? removeMenuFromBg() : {}}>
        <div className="absolute right-4 top-5 md:hidden">
          <button onClick={toggleMenu}>
            {showMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-10 h-10 rotate-180 duration-700  transition">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-10 h-10  transition">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        <div className='py-2 pb-3 w-[120px] md:py-3'>
          <Link href={'/'}>
            <Image className='object-cover' src="/logo.png" alt='logo' width={120} height={100} priority={true} />
          </Link>
        </div>
      </div>
      <div className={`h-screen w-[75vw] transition flex-col absolute top-0 bg-primary pointer-events-none flex px-8 py-2 md:flex-row md:justify-between md:items-center md:w-full md:h-[5rem] delay-50 md:opacity-100 md:pointer-events-auto 	${showMenu ? 'opacity-100 pointer-events-auto	' : 'opacity-0'}`}>
        <div className='w-[150px]  hidden md:block'>
          <Link href={'/'}>
            <Image src="/logo.png" className='-translate-x-8 md:translate-x-0 md:mb-2' alt='logo' width={130} height={80} priority={true} />
          </Link>
        </div>
        <div>
          <div className='flex flex-col text-white font-medium mt-10 gap-7 text-lg md:text-base md:gap-10 md:mt-0 md:flex-row md:items-center'>
            <div>
              <ScrollLink spy={true} onClick={removeMenuFromBg} smooth to="home" className='cursor-pointer hover:text-red-200 transition'>Hem</ScrollLink>
            </div>
            <div >
              <ScrollLink spy={true} onClick={removeMenuFromBg} offset={-60}
                smooth to="about"
                className='cursor-pointer hover:text-red-200 transition'>Om Hungriga</ScrollLink>
            </div>
            <div>
              <ScrollLink spy={true} onClick={removeMenuFromBg} offset={-60} smooth to="services" className='cursor-pointer hover:text-red-200 transition'>Tjänster</ScrollLink>
            </div>
            <div className='text-center w-[10rem] border-2 border-white px-5 py-2 rounded-full cursor-pointer hover:text-primary md:w-auto outline-none hover:bg-white transition'>
              <ScrollLink spy={true} onClick={removeMenuFromBg} smooth to="contact-us" offset={-60} >Kontakta oss</ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar