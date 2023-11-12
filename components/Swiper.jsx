
import { useState } from 'react';

import ReactPlayer from 'react-player/lazy';
 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Mousewheel } from 'swiper/modules';

import '@/styles/MyWork.css';

export default function App() { 

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

  return (
    <>
      <Swiper
        effect={'coverflow'} 
        direction='vertical' 
        grabCursor={true}
        centeredSlides={true}
        slideToClickedSlide={false}
        slidesPerView={'auto'}   
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 300,
          modifier: 1, 
        }}     
        loop={true}  
        autoplay={true}
        mousewheel={true}
        spaceBetween={1} 
        modules={[EffectCoverflow, Mousewheel, Autoplay]} 
        className='swiperBlock'
      > 
        {vidArr.map((vid)=>{
          return(
            <SwiperSlide className='swiperSlide'>
              <img onClick={() => openVideoOverlay(vid)} src={`http://img.youtube.com/vi/${vid}/0.jpg`} alt="thumbnail-load" />
            </SwiperSlide>  
          ) 
        })} 
      </Swiper>

      {showOverlay && ( 
        <div data-aos="zoom-in" className="video-overlay">
            <ReactPlayer url={`https://www.youtube.com/embed/${videoID}`} light playing controls width={650} height={450}/>
            <button className="close-button" onClick={closeVideoOverlay}>x</button>
        </div>
      )}
    </>
  );
}



