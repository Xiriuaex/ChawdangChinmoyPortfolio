
import Link from 'next/link';
import { useState, useEffect } from 'react';

//Dropdown icon:
import { FaBars } from "react-icons/fa6";

//Navbar Css:
import '@/styles/Navbar.css'

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
    
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) { // if scroll down hide the navbar
      setShow(false); 
    } else if(window.scrollY < lastScrollY) { // if scroll up show the navbar
      setShow(true);  
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  }; 

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);

  
  //state of the dropdown:
  const [isOpen, setOpen] = useState(false);

  //to toggle the dropdown state:
  const toggleDropdown = () =>{
    setOpen(!isOpen);  
  } 

  return (
      <nav className={`navbar ${ show ? "show" : "hidden"} transition-all duration-500 z-50`}>
          <div className='ml-[8vw] mt-[3.5vh]'>
            <span className='text-4xl'><Link href={"/"} className='hover_Link'>CHINMOY</Link></span>
          </div>

          {/* Desktop/tablet Navbar */}
          <div className='mobile:hidden tablet:inline mr-[8vw] mt-[5vh]'>
            <ul className='flex flex-row space-x-8'>
                <li><Link className='hover_Link' data-testid="home" href="/">Home</Link></li>
                <li><Link className='hover_Link' data-testid="workRoute" href="/Mywork">My Work</Link></li> 
            </ul>
          </div> 

          {/* Mobile Navbar */}
          <div className='relative right-8 mobile:flex tablet:hidden'>
            <FaBars data-testid="dropdownFunction" className='text-[#ededed] w-10 h-8 mt-[4.5vh] icon_hover' onClick={toggleDropdown} />
            <div data-testid="hidden" className={`dropdown_body z-50 ${!isOpen && "hidden"}`}>
              <ul className='flex flex-col my-5 space-y-5 ml-7'>
                <li><Link className='dropdown_items' href={"/"}>Home</Link></li>
                <li><Link className='dropdown_items' href={"/Mywork"}>My Work</Link></li>
              </ul>
            </div>
          </div>
      </nav> 
  )
}

export default Nav
