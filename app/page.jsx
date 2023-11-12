'use client'

import { useEffect } from "react";

import AboutMe from "@/components/AboutMe.jsx";
import Contact from "@/components/Contact.jsx";
import MyWork from "@/components/MyWork.jsx";
import Footer from "@/components/Footer.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import BGimg from "@/components/BGimg.jsx";
import Hero from "@/components/Hero.jsx"; 

import Aos from "aos";
import 'aos/dist/aos.css' 

const Home = () => {
  useEffect(()=>{
    Aos.init({  
      duration: 500, 
    })
  }, []);

  return (
    <div>  
      <Hero/> 
      <BGimg /> 
      <MyWork/>
      <AboutMe/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
