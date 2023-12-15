
import { useState, useContext } from 'react';

import ReactPlayer from 'react-player';
 
//Swiper Js imports:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Mousewheel } from 'swiper/modules';

//Video Data Context:
import { DataContext } from '@/Context/dataContext';

export default function App() { 

  const { videoData } = useContext(DataContext);

  //Overlay controll state:
  const [showOverlay, setShowOverlay] = useState(false);
  const [videoID, setVideoID] = useState('');
 
  //To Open Video Overlay:
  const openVideoOverlay = (videoID) => {
    setVideoID(videoID);
    setShowOverlay(true);
  };

  //To Close Video Overlay:
  const closeVideoOverlay = () => {
    setVideoID('');
    setShowOverlay(false);
  };

  return (
    <>
    {/* Swiper Component  with parameters */}
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
      {/* Video array mapping in the swiper */}
        {videoData.map((vid)=>{
          return(
            <SwiperSlide className='swiperSlide'>
              <img onClick={() => openVideoOverlay(vid.embededCode)} src={`http://img.youtube.com/vi/${vid.embededCode}/0.jpg`} alt="thumbnail-load" />
            </SwiperSlide>  
          ) 
        })} 
      </Swiper>

      {/* If ShowOverlay is true then Video Overlay will open */}
      {showOverlay && ( 
        <div data-aos="zoom-in" className="video-overlay">
            <ReactPlayer url={`https://www.youtube.com/embed/${videoID}`} light playing controls width={650} height={450}/>
            <button className="close-button" onClick={closeVideoOverlay}>x</button>
        </div>
      )}
    </>
  );
}



