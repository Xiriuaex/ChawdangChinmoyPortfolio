'use client'

import { useState } from 'react'
import ReactPlayer from 'react-player';

import Nav from '@/components/nav';
import Footer from '@/components/Footer';
import Loader from '@/components/loader';

import "./styles.css";  


const page = () =>  {
  const vidArr=[{id:'8znAaJYpqPs', cat:"trailer"},
  {id:'mob4RkUFIAE', cat:"trailer"},
  {id:'KwWUQAG0sKk', cat:"film"},
  {id:'UYI6yhi4aTc', cat:"shorts"},
  {id:'8znAaJYpqPs', cat:"film"},
  {id:'mob4RkUFIAE', cat:"film"},
  {id:'KwWUQAG0sKk', cat:"shorts"},
  {id:'mob4RkUFIAE', cat:"trailer"}]
    
  const [showOverlay, setShowOverlay] = useState(false);
  const [videoID, setVideoID] = useState('');  
  
  const filterBtns= [...new Set(vidArr.map((vid)=> vid.cat))];

  const [videos, setvideos]= useState(vidArr);

  const onFilterValueChanged=(currCat)=>{
    const videoByCat = vidArr.filter((newVal) => {
      return newVal.cat === currCat;
    });
    setvideos(videoByCat);
  } 


  //Overlay functions:
  const openVideoOverlay = (videoID) => {
    setVideoID(videoID);
    setShowOverlay(true);
  };

  const closeVideoOverlay = () => {
    setVideoID('');
    setShowOverlay(false);
  };

return (
  <div className='mainDiv'>
    <Nav/>
    <div className="heading">MY WORK</div>
    <div className='filterSection absolute space-x-5 top-[48vh] ml-7'>
          {
            filterBtns.map((vidCat, id)=>(
                <button className="btns" key={id} onClick={()=>onFilterValueChanged(vidCat)}>
                    {vidCat}
                </button> 
            ))
          }
          
          <button className="btns" onClick={()=>setvideos(vidArr)}>
            All
          </button>
    </div>
    <div className="videos">
      {videos.map((vid, id)=>{
        return( 
          <div onClick={()=>openVideoOverlay(vid.id)}  className="vidCard" key={id}> 
            <img key={id} src={`http://img.youtube.com/vi/${vid.id}/0.jpg`}  alt="thumbnail-load"/>
            <div key={id} className="named">
              <div className="text-[30px]">this</div>
            </div>
          </div> 
        )
      })}
    </div>
    {showOverlay && ( 
      <div data-aos="zoom-in" className="video-overlay">
          <ReactPlayer onProgress={ <Loader/>} url={`https://www.youtube.com/embed/${videoID}`} light playing controls/>
          <button className="close-button" onClick={closeVideoOverlay}>x</button>
      </div>
    )} 

      <a href="#" className="top">Back to Top</a> 
      <Footer/>
  </div> 
)}

export default page
