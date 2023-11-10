import React from 'react'
import imgSrc from "@/app/assets/7.jpg";
import Image from 'next/image';

const BGimg = () => {
  return (
    <div>
         <Image src={imgSrc} alt="camera-guy" className='relative h-[620vh] w-full opacity-90'/>
    </div>
  )
}

export default BGimg
