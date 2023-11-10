import React from 'react'
import '../styles/Footer.css';
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='footer w-full bg-black text-[#6e6d6d] flex flex-col justify-between items-center'> 
        <div className='upper_footer link flex flex-row justify-between mx-auto'>
            <div className='mb-6 mt-10'>
                <p className='text-4xl text-center mb-3'>ChawdangChinmoy</p>
                <h2 className='text-[1rem] text-center'>Lorem ipsum dolor sit, amet c lit.</h2>
                <p className='text-xl text-center mt-6 mb-3'>Connect</p>
                <ul className='flex flex-row space-x-4 text-2xl justify-center'>
                    <li><a className='hover:text-white' href="facebook.com"><BiLogoFacebookSquare/></a></li>
                    <li><a className='hover:text-white' href="instagram.com"><BiLogoInstagramAlt/></a></li>
                    <li><a className='hover:text-white' href="linkedin.com"><BiLogoLinkedinSquare/></a></li>
                </ul>
            </div>   
        </div>
        <div className='lower_footer flex flex-col justify-between items-center'>
            <div className="lower_left text-[15px]">
                <h3>Designed by Xiraex</h3>
            </div>
            <div className="lower_right text-[12px] mb-4">
                <p>&copy;ChawdandChinmoy2023</p>
            </div>
           
        </div>
  </div>
  )
}

export default Footer
