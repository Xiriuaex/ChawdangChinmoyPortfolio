'use client'

import { useEffect } from "react";

//importing all the components that constructs the home page:
import Nav from "@/components/Navbar";
import Hero from "@/components/Hero";
import MyWork from "@/components/MyWork";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


//importing aos library to imply animations on scroll:
import Aos from "aos";
import 'aos/dist/aos.css' 

const Home = () => {

  //using useEffect to initialize aos after rendering the page:
  useEffect(()=>{
    Aos.init({  
      duration: 500, 
    })
  }, []);

  return (
      <div>  
          <Nav />
          <Hero/> 
          <MyWork/>
          <AboutMe/>
          <Testimonials/>
          <Contact/>
          <div className="relative">
            <Footer/>
          </div>
      </div>
  )
}

export default Home
