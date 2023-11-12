
import Link from 'next/link';
import "@/styles/Header.css"; 

const Nav = () => {
  return (
      <nav className="navbar z-50">
          <span className='main_title'><Link href={"/"} className='hoverLink'>CHINMOY</Link></span>

          <div className='mobile:hidden tablet:inline'>
            <ul className='mx-auto my-7 flex flex-row space-x-8'>
                <li><Link className='hoverLink' href={"/"}>Home</Link></li>
                <li><Link className='hoverLink' href={"/Mywork"}>My Work</Link></li>
                <li><Link className='hoverLink' href={"/Contact"}>Contact Me</Link></li>
            </ul>
          </div> 
      </nav> 
  )
}

export default Nav
