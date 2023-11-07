'use client'

import { useEffect } from "react";

import AboutMe from "@/app/layouts/AboutMe.jsx";
import Contact from "@/app/layouts/Contact.jsx";
import Header from "@/app/layouts/Header.jsx"; 
import MyWork from "@/app/layouts/MyWork.jsx";
import Footer from "@/app/layouts/Footer.jsx";
import Testimonials from "@/app/layouts/Testimonials.jsx";
import BGvids from "@/app/layouts/BGvids.jsx";
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
        <Parallax pages={2.30}>
          <ParallaxLayer offset={0} speed={4}>
            <BGvids />
          </ParallaxLayer> 
          <ParallaxLayer offset={0} speed={1.7}>
            <Nav />
            <Header /> 
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
