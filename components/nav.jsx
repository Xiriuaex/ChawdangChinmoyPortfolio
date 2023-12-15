'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

//Dropdown icon:
import { FaBars } from "react-icons/fa6";

//Navbar Css:
import '@/styles/Navbar.css'

const Nav = () => {
    const [scrollDirection, setScrollDirection] = useState(0);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);

    //state of the dropdown:
    const [isOpen, setOpen] = useState(false);

    //to toggle the dropdown state:
    const toggleDropdown = () =>{
      setOpen(!isOpen); 
    } 

  return (
      <nav className={`navbar ${ scrollDirection === "down" ? "-top-24" : "top-0"} transition-all duration-500`}>
          <div className='ml-[8vw] mt-[3.5vh]'>
            <span className='text-4xl'><Link href={"/"} className='hoverLink'>CHINMOY</Link></span>
          </div>

          {/* Desktop/tablet Navbar */}
          <div className='mobile:hidden tablet:inline mr-[8vw] mt-[5vh]'>
            <ul className='flex flex-row space-x-8'>
                <li><Link className='hoverLink' href={"/"}>Home</Link></li>
                <li><Link className='hoverLink' href={"/Mywork"}>My Work</Link></li>
                <li><Link className='hoverLink' href={"/Contact"}>Contact Me</Link></li>
            </ul>
          </div> 

          {/* Mobile Navbar */}
          <div className='relative right-8 mobile:flex tablet:hidden'>
            <FaBars className='text-[#ededed] w-10 h-8 mt-[4.5vh] icon_hover' onClick={toggleDropdown} />
            <div className={`dropdown_body ${isOpen && 'open'}`}>
              <ul className='flex flex-col my-5 space-y-5 ml-7'>
                <li><Link className='dropdown_items' href={"/"}>Home</Link></li>
                <li><Link className='dropdown_items' href={"/Mywork"}>My Work</Link></li>
                <li><Link className='dropdown_items' href={"/Contact"}>Contact Me</Link></li>
              </ul>
            </div>
          </div>
      </nav> 
  )
}

export default Nav
