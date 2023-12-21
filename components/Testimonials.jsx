
//Testimonial CSS:
import "@/styles/Test.css";
 
//Swiper Js imports:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div data-aos="slide-up" className='test_Part'> 
      <div className='test_Title'>
        <p className='text-[#ededed] mobile:text-4xl tablet:text-5xl laptop:text-6xl'>Testimonials</p> 
      </div>
      <div className='mt-16'>
        <Swiper  
          loop={true} 
          autoplay={{
            delay: 2500,
          }} 
          modules={[Navigation, Autoplay]} 
          className="mySwiper"
        >
          <SwiperSlide> &quot;A visual feast! The way you blend storytelling with stunning visuals is truly remarkable.&quot;</SwiperSlide>
          <SwiperSlide>&quot;I&apos;m constantly amazed by the emotion your videos evoke.&quot;</SwiperSlide>
          <SwiperSlide>&quot;Your videos are a breath of fresh air.&quot;</SwiperSlide>
          <SwiperSlide>&quot;Your videos have this magical ability to transport me to different worlds. Truly captivating!&quot;</SwiperSlide>
        </Swiper>
      </div>
  </div>
  )
}

export default Testimonials
