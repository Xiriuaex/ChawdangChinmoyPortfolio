
import imgSrc from "@/public/assets/7.jpg";
import Image from 'next/image';

const BGimg = () => {
  return (
    <div>
         <Image src={imgSrc} alt="camera-guy" className='absolute desktop:h-[410vh] laptop:h-[410vh] tablet:h-[380vh] mobile:h-[350vh] -z-50 w-full opacity-90'/>
    </div>
  )
}

export default BGimg
