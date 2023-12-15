
//Testimonial CSS:
import "@/styles/Test.css";
 
//Swiper Js imports:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div data-aos="slide-up" className='testPart'> 
      <div className='testTitle'>
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
          <SwiperSlide>This is Nice</SwiperSlide>
          <SwiperSlide>Awesome</SwiperSlide>
          <SwiperSlide>I like his work</SwiperSlide>
          <SwiperSlide>YO YO honey singh</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide> 
        </Swiper>
      </div>
  </div>
  )
}

export default Testimonials
