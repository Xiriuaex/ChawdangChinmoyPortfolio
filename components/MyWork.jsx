
import Link from 'next/link';
import { useState } from 'react';
import ReactPlayer from 'react-player';

//Video Data Context:
import { videoData } from '@/data/dataContext';

//My Work CSS:
import '@/styles/MyWork.css';
import Image from 'next/image';

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
      <div className='titleSection'>
        <p className='work_title'>MY WORK</p>
        <Link className='hover:text-[#DA0037] text-center w-16 text-[1rem] ml-[2.3px] mt-[4px]' href={"/Mywork"}>See All</Link> 
      </div>
      <div className='thumbnailEffect relative'>
        {videoData.slice(1, 6).map((vid, id)=>{
              const videoSrc = `http://img.youtube.com/vi/${vid.embededCode}/0.jpg`;
              return( 
                <>
                   <Image
                    width={150}
                    height={260}
                    data-testid="overlay" 
                    key={id}
                    onClick={() => openVideoOverlay(vid.embededCode, vid.title)} 
                    src={videoSrc} 
                    alt="thumbnail-load" 
                  />
                </>
              ) 
            })}
      </div>

       {/* If ShowOverlay is true then Video Overlay will open */}
       {showOverlay && 
          <div data-aos="zoom-in" className="Overlay">
            <button className="close_Button" onClick={closeVideoOverlay}>x</button>
            <div className='video_Details'>{videoTitle}</div>
            <div className='video_inner'>
              <ReactPlayer width={'55%'} height={'80%'} url={`https://www.youtube.com/embed/${videoID}`} light playing controls/>
            </div>
          </div>
      }
    </div>
  )}

export default MyWork
