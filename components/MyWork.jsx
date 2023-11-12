
import '@/styles/MyWork.css';   
import Swiper from './Swiper.jsx'; 
const MyWork = () => {
  return (
      <div  className='workSection'>
        <div className='title mx-auto text-[#171717] mobile:text-3xl tablet:text-4xl laptop:text-6xl'>
          MY WORK
        </div>
        <div>
          <Swiper/>
        </div>
      </div>
  )
}

export default MyWork
