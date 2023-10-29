import React from 'react'
import '../styles/Aboutme.css'; 

const AboutMe = () => {
  return ( 
    <div className='aboutSection mt-[26vh] ml-[22vw] flex flex-row justify-between items-center  opacity-90'> 
          
        <div className='aboutMe mx-auto'>
            <p className='text-[#666666] font-light  mobile:text-3xl tablet:text-4xl laptop:text-6xl'>About Me</p>
        </div>
        <div className="details w-[40vw] ml-8">
          <p className='text-[#EDEDED] text-center tablet:text-xl laptop:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cupiditate reprehenderit expedita non impedit. Dolores autem debitis quae eveniet libero cupiditate laudantium adipisci delectus. Quis delectus dolorum quasi quibusdam sequi?</p>
        </div>
          
    </div> 
    
  )
}

export default AboutMe
