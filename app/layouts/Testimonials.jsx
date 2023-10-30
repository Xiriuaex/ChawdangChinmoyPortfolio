import React from 'react'
import "../styles/Test.css";
 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; 

// import required modules
import { Autoplay, Navigation, Mousewheel } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className='mt-[26vh] flex flex-col justify-between mx-40 items-center'> 
    <div className='test m-auto'>
       <p className='text-[#ededed] mobile:text-4xl tablet:text-5xl laptop:text-6xl'>Testimonials</p> 
    </div>
    <div className='mt-[7vh]'>
      <Swiper  
        loop={true} 
        autoplay={{
          delay: 2500,
        }} 
        modules={[Navigation, Autoplay]} 
        className="mySwiper rounded-2xl"
        >
          <SwiperSlide>This is Nice</SwiperSlide>
          <SwiperSlide>Awesome</SwiperSlide>
          <SwiperSlide>I like his work</SwiperSlide>
          <SwiperSlide>YO YO honey singh</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide> 
        </Swiper>
    </div>
  </div>
  )
}

export default Testimonials
