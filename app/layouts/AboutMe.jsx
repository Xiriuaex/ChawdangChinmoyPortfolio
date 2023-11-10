import React from 'react'
import '../styles/Aboutme.css'; 

const AboutMe = () => {
  return ( 
    <div className='aboutsec relative mt-[26vh] flex flex-row justify-between items-center'>   
        <div className='aboutMe'>
            <p className='text-[#171717] mobile:text-3xl tablet:text-4xl laptop:text-6xl'>About Me</p>
        </div>
        <div className="details">
          <p className='text-[#171717] text-center tablet:text-xl laptop:text-2xl'>cupiditate laudantium adipisci laudantium adipisci laudantium adipisci delectus. Quis delectus dolorum quasi quibusdam sequi?</p>
        </div>
          
    </div> 
    
  )
}

export default AboutMe
