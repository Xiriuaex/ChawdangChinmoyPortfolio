'use client'

import { useEffect } from "react";

//All layouts imports:
import AboutMe from "@/app/layouts/AboutMe.jsx";
import Contact from "@/app/layouts/Contact.jsx";
import Header from "@/app/layouts/Header.jsx"; 
import MyWork from "@/app/layouts/MyWork.jsx";
import Footer from "@/app/layouts/Footer.jsx";
import Testimonials from "@/app/layouts/Testimonials.jsx";
import BGvids from "@/app/layouts/BGvids.jsx";
import Nav from "@/app/layouts/nav.jsx";

//AOS imports:
import Aos from "aos";
import 'aos/dist/aos.css'


//Parallax imports:
import { Parallax, ParallaxLayer  } from "@react-spring/parallax";

const Home = () => {

  useEffect(()=>{
    Aos.init({  
      duration: 1500, 
    })
  }, []);

  return (
    <div> 
        <Nav />
        <Parallax pages={2.30}>
          <ParallaxLayer offset={0} speed={4}>
            <BGvids />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.7}>
            <Header /> 
          </ParallaxLayer>   
          <ParallaxLayer offset={0.76} speed={1.7}>
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
