
import {Fragment } from 'react';
import "@/styles/Header.css"; 

const Header = () => {
  return (
    <Fragment> 
          <div className='heading'>
                <h1 className='mobile:text-4xl tablet:text-5xl laptop:text-6xl'>CHAWDANG CHINMOY</h1>
                <h1 className='mobile:text-xl tablet:text-3xl'>Who, Am, I?</h1>
          </div> 
    </Fragment>
  )
}

export default Header
