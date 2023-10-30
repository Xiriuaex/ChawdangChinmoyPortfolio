'use client'

import Nav from '@/app/layouts/nav';
import Footer from '@/app/layouts/Footer';

import { Parallax, ParallaxLayer  } from "@react-spring/parallax";

import "./styles.css";

const page = () => {
return (
  <div className='mainDiv'>
        
    <Parallax pages={1.34}> 
      <ParallaxLayer offset={0} speed={2.7}>
        <div className='fixed w-full top-0 z-50'>
          <Nav/> 
        </div>
        <div className='relative mt-40'>
            <div className='heading text-center text-[#e2d7f1] mobile:text-3xl tablet:text-4xl laptop:text-6xl'>CONTACT DETAILS</div>
            <div className="videos w-full flex flex-row flex-wrap justify-evenly">
               
            </div>
        </div>  
        <div className='fixed bottom-0 w-full'>
          <Footer/>
        </div> 
      </ParallaxLayer>  
    </Parallax>
  </div>
  )
}

export default page
