'use client'

import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
  
import "./styles.css"
const page = () => {
return (
  <div className='contactDiv'> 
            <div className='fixed w-full z-50'>
              <Nav/> 
            </div>
            <div className='relative top-[7.5rem] ml-16 text-[#e2d7f1] mobile:text-3xl tablet:text-4xl laptop:text-5xl'>CONTACT ME</div>
            <div className="main relative flex flex-row w-full h-[30vh] mb-20 justify-evenly top-[11rem] text-[#e2d7f1]">
               <div className="address text-center mt-[10vh]"> 
                  <p>Visit at</p>
                  <p>Opp Chest Hosp, S R Nagar</p>
                  <p>7107, Hyderabad, India</p>
               </div>
               <div className="connect text-center mt-[10vh]">
                  <p>Contact at</p>
                  <p> +91  04023815151</p>
                  <p>something@gmail.com</p>
               </div> 
            </div>
            <div className='relative top-16'>
              <Footer/>
            </div>

  </div>
  )
}

export default page
