'use client'

import React, { useState, useEffect } from 'react'

import ReactPlayer from 'react-player';

import Nav from '@/app/layouts/nav';
import Footer from '@/app/layouts/Footer';

import Aos from "aos";
import 'aos/dist/aos.css'

import "./styles.css";

const page = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [videoID, setVideoID] = useState('');

  const vidArr=['8znAaJYpqPs', 'mob4RkUFIAE', 'KwWUQAG0sKk', 'UYI6yhi4aTc', 'GLy4VKeYxD4' ];

  const openVideoOverlay = (videoID) => {
    setVideoID(videoID);
    setShowOverlay(true);
  };

  const closeVideoOverlay = () => {
    setVideoID('');
    setShowOverlay(false);
  };
  
  useEffect(()=>{
    Aos.init({  
      duration: 500, 
    })
  }, []);

return (
    <div> 
      <div className='fixed top-0 z-50'>
        <Nav/> 
      </div>
      <div className='relative mt-40'>
          <div className='heading text-center text-[#666666] mobile:text-3xl tablet:text-4xl laptop:text-6xl'>MY WORK</div>
          <div className="videos w-full flex flex-row flex-wrap justify-evenly">
            {vidArr.map((vid)=>{
              return(
                <div onClick={() => openVideoOverlay(vid)} className="vidCard mt-12 mb-12">
                  <img style={{width:'31vw', height:'43vh'}}  src={`http://img.youtube.com/vi/${vid}/0.jpg`} alt="thumbnail-load" />
                  <div class="named w-full">
                    <div class="text">John Doe</div>
                  </div>
                </div>
              )
            })}
          </div>
          {showOverlay && ( 
            <div data-aos="zoom-in" className="video-overlay">
                <ReactPlayer url={`https://www.youtube.com/embed/${videoID}`} light playing controls width={650} height={450}/>
                <button className="close-button" onClick={closeVideoOverlay}>x</button>
            </div>
          )}
      </div> 
      <div className='absolute w-full'>
        <Footer/>
      </div>
    </div>
  )
}

export default page
