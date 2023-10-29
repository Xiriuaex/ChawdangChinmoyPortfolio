'use client'

//import icons:
import {BsFillPlayFill, BsFillPauseFill} from "react-icons/bs";


import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '../styles/MyWork.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 
import vidSrc from "@/app/assets/videos/This.mp4";

// import required modules
import { EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

export default function App() { 

   
  const videoRef= useRef(); 

  const vidArr=[vidSrc, vidSrc, vidSrc, vidSrc, vidSrc, vidSrc];
  
  return (
    <>
      <Swiper
        effect={'coverflow'} 
        direction='vertical' 
        grabCursor={false}
        centeredSlides={true}
        slideToClickedSlide={false}
        slidesPerView={2}   
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}     
        loop={true}  
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }} 
        spaceBetween={10} 
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper" 
      > 
        
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        
        
        {vidArr.map((vid, i)=>{
          return(
            <SwiperSlide>
              <video className="object-fill w-full h-full rounded-[30px]" src={vid} type="video/mp4" ref={videoRef}/>
            </SwiperSlide>  
          ) 
        })} 

      </Swiper>
    </>
  );
}



