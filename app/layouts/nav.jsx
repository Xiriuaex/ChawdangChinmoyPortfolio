'use client';

import React, { useEffect, useState} from 'react';
import Link from 'next/link';
import "../styles/Header.css"; 




const Nav = () => {
  return (
      <nav className="bg-neutral-900 opacity-90 flex flex-row justify-evenly w-full z-50">
      
          <span className='laptop:ml-8 tablet:ml-5 my-4 text-4xl'><Link href={"/"} className='hoverLink'>CHINMOY</Link></span>
          
          <div className='mobile:hidden tablet:inline'>
            <ul className='laptop:mr-8 tablet:mr-5 mobile:mr-2 my-7 flex flex-row space-x-8'>
                <li><Link className='hoverLink' href={"/"}>Home</Link></li>
                <li><Link className='hoverLink' href={"/Mywork"}>My Work</Link></li>
                <li><Link className='hoverLink' href={"/Contact"}>Contact Me</Link></li>
            </ul>
          </div> 
      </nav> 
  )
}

export default Nav
