'use client'

import { useEffect } from "react";

//importing all the components that constructs the home page:
import Nav from "@/components/nav.jsx";
import Hero from "@/components/Hero.jsx";
import MyWork from "@/components/MyWork.jsx";
import AboutMe from "@/components/AboutMe.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";


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
