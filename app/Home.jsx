'use client'

import { useEffect } from "react";

import AboutMe from "@/app/layouts/AboutMe.jsx";
import Contact from "@/app/layouts/Contact.jsx";
import Header from "@/app/layouts/Header.jsx"; 
import MyWork from "@/app/layouts/MyWork.jsx";
import Footer from "@/app/layouts/Footer.jsx";
import Testimonials from "@/app/layouts/Testimonials.jsx";
import BGvids from "@/app/layouts/BGvids.jsx";
import BGimg from "@/app/layouts/BGimg.jsx";
import Nav from "@/app/layouts/nav.jsx";


import Aos from "aos";
import 'aos/dist/aos.css'

import { Parallax, ParallaxLayer  } from "@react-spring/parallax";

export const metadata = {
  title: 'Portfolio',
  description: '',
}


const Home = () => {
  useEffect(()=>{
    Aos.init({  
      duration: 500, 
    })
  }, []);

  return (
    <div> 
        <Parallax pages={1.643}>
          <ParallaxLayer className="z-50" offset={0} speed={5.3}>
            <Nav />
            <Header /> 
          </ParallaxLayer> 
          <ParallaxLayer offset={0} speed={2}>
            <BGimg />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={5.5}>
            <BGvids />
          </ParallaxLayer>
          <ParallaxLayer offset={.83} speed={4.6}>
            <MyWork/>
            <AboutMe/>
            <Testimonials/>
            <Contact/>
            <Footer/>  
          </ParallaxLayer>  
        </Parallax>
         
    </div>
  )
}

export default Home
