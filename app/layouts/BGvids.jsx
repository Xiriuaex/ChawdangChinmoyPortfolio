import React from 'react'
import vidSrc from "@/app/assets/videos/This.mp4";
import imgSrc from "@/app/assets/camera.jpg";
import Image from 'next/image';

const BGvids = () => {
  return (
    <div>
       <video className="right-0 top-0 -z-50 object-fill w-full h-[100vh]" src={vidSrc} playsInline autoPlay muted loop type="video/mp4" />
       <Image src={imgSrc} alt="camera-guy" className='h-[1000vh] opacity-80'/>
    </div>
  )
}

export default BGvids
