
import Link from 'next/link';

//import Swiper Component:
import Swiper from './Swiper.jsx';

//My Work CSS:
import '@/styles/MyWork.css';

const MyWork = () => {
  return (
      <div data-aos="slide-up" className='workSection'>
        <div className='title flex flex-col'>
          MY WORK 
          <Link className='hover:text-[#DA0037] text-[1rem] ml-[2.3px] mt-[4px]' href={"/Mywork"}>See All</Link> 
        </div>
        <div>
          <Swiper/>
        </div>
      </div>
  )
}

export default MyWork
