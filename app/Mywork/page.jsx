'use client'

//Stylesheet:
import "./styles.css";  
import { useState } from 'react';
import ReactPlayer from 'react-player';

import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';

//Context data:
import { videoData } from '@/data/dataContext';
import Image from "next/image";


const Page = () => { 

  const [videos, setVideos] = useState(videoData);
  
  //Overlay States:
  const [showOverlay, setShowOverlay] = useState(false);
  const [videoID, setVideoID] = useState('');

  //Filter buttons Array: copying all the category from the videoData array:
  const filterBtns= [...new Set(videoData.map((vid)=> vid.category))];

  //Filter value change function:
  const onFilterValueChanged=(currCat)=>{
    const videoByCategory = videoData.filter((newVal) => {
      return newVal.category === currCat;
    });
    setVideos(videoByCategory);
  } 
  
  //Overlay functions:
  const openVideoOverlay = (videoID) => {
    console.log("clicked")
    setVideoID(videoID);
    setShowOverlay(true);
  };

  const closeVideoOverlay = () => {
    setVideoID('');
    setShowOverlay(false);
  };

return (
  <div className='main_div'>
    <Nav />
 

    <div className='filter_section'>
          {
            filterBtns.map((vidCat, id)=>(
                <button className="filter_buttons" key={id} onClick={()=>onFilterValueChanged(vidCat)}>
                    {vidCat}
                </button> 
            ))
          }
          <button className="filter_buttons" onClick={()=>setVideos(videoData)}>
            All
          </button>
    </div>

    {/* Video Section: */}
    <div className="video_Section">
      {videos.map((video, id)=>{
        return( 
          <div key={id} data-testid="openOverlay" onClick={()=>openVideoOverlay(video.embededCode)}  className="video_Card"> 
            <Image src={`http://img.youtube.com/vi/${video.embededCode}/0.jpg`}  alt="thumbnail_load"/>
            <div className="video_Title">
              <div>{video.title}</div>
              <div className='video_Description'>{video.description}</div>
            </div>
          </div> 
        )
      })}
    </div>

    {/* Overlay playe: */}
    {showOverlay && ( 
      <div data-testid="overlay" data-aos="zoom-in" className="video_Overlay">
          <ReactPlayer width={'70vw'} height={'60vh'} style={{margin:"auto", aspectRatio:16/9}} url={`https://www.youtube.com/embed/${videoID}`} light playing controls/>
          <button className="close_Button" onClick={closeVideoOverlay}>x</button>
      </div>
    )}

    <a href="#" className="top">Back to Top</a>  
    
    <Footer/> 
  </div>
)}

export default Page
