
import Link from 'next/link';
import { useState } from 'react';
import ReactPlayer from 'react-player';

//Swiper Js imports:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Mousewheel } from 'swiper/modules';

//Video Data Context:
import { videoData } from '@/data/dataContext';

//My Work CSS:
import '@/styles/MyWork.css';

const MyWork = () => {
 
  //Overlay controll state:
  const [showOverlay, setShowOverlay] = useState(false);
  const [videoID, setVideoID] = useState('');
  const [videoTitle, setVideoTitle] = useState('');

  //To Open Video Overlay:
  const openVideoOverlay = (videoID, videoTitle) => {
    setVideoID(videoID);
    setVideoTitle(videoTitle);
    setShowOverlay(true);
  };
 
  //To Close Video Overlay:
  const closeVideoOverlay = () => {
    setVideoID('');
    setVideoTitle('');
    setShowOverlay(false);
  };

  return (
    <div data-aos="slide-up" className='work_Section'>
      <div className='title'>
        MY WORK 
        <Link className='hover:text-[#DA0037] w-16 text-[1rem] ml-[2.3px] mt-[4px]' href={"/Mywork"}>See All</Link> 
      </div>
      <div>
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
          mousewheel={true}
          spaceBetween={1} 
          modules={[EffectCoverflow, Mousewheel, Autoplay]} 
          className='swiper_Block'
        > 
          {/* Video array mapping in the swiper */}
            {videoData.map((vid, id)=>{
              return(
                <SwiperSlide className='swiper_Slide' key={id}>
                  <img data-testid="overlay" onClick={() => openVideoOverlay(vid.embededCode, vid.title)} src={`http://img.youtube.com/vi/${vid.embededCode}/0.jpg`} alt="thumbnail-load" />
                </SwiperSlide>  
              ) 
            })} 
        </Swiper>
        
      </div>

      {/* If ShowOverlay is true then Video Overlay will open */}
      {showOverlay && 
          <div data-aos="zoom-in" className="Overlay">
            <div className='video_Details'>{videoTitle}</div>
            <ReactPlayer width={'55%'} height={'80%'} url={`https://www.youtube.com/embed/${videoID}`} light playing controls/>
            <button className="close_Button" onClick={closeVideoOverlay}>x</button>
          </div>
      }
    </div>
  )}

export default MyWork
