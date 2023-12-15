'use client';

import { useContext } from 'react'

import "./styles.css";

import Nav from '@/components/nav';
import Footer from '@/components/Footer';
import { DataContext } from '@/Context/dataContext';

const page = () => {
  const { videoData, addData }= useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const vidData={
      embededCode: event.target.embededCode.value,
      title: event.target.title.value,
      description: event.target.desc.value,
      category: event.target.cat.value,
    }
    addData(vidData);
    event.target.reset();

    console.log(videoData);
  }

  return (  
    <div className='adminBoard'>
      <div className='navigation'>
        <Nav/>
      </div>
      <div className='new_section'>
        <form action="/admin" onSubmit={handleSubmit} className='flex flex-col' >
            <label>Embeded code:<br/>
              <input  type="text" id='embededCode' className='text-black rounded-sm' />
            </label>
            <label>title:<br/>
              <input  type="text" id='title' className='text-black rounded-sm' />
            </label>
            <label>description:<br/>
              <input  type="text" id='desc' className='text-black rounded-sm h-24'/>
            </label>   
            <label>Category:<br/>
              <input  type="text" id='cat' className='text-black rounded-sm'/>
            </label>   
            <button type="submit" className='mt-4 border-2 w-20 text-center rounded-md text-[#838282] hover:border-[#da0037] hover:text-[#ededed]'>Submit</button>
        </form>
      </div>
      <div className='list_section'>
        
      </div>
      <div className='relative top-32'>
        <Footer/>
      </div>
    </div> 
  )
}

export default page
