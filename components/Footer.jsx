
import '@/styles/Footer.css';
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='footer bottom-0'> 
        <div className='mb-6 mt-10'>
            <p className='f_name'>ChawdangChinmoy</p>
            <p className='f_details'>Lorem ipsum dolor sit, amet c lit.</p>
            <p className='f_connect'>Connect</p>
            <ul className='f_links'>
                <li><a className='hover:text-white' href="facebook.com"><BiLogoFacebookSquare/></a></li>
                <li><a className='hover:text-white' href="instagram.com"><BiLogoInstagramAlt/></a></li>
                <li><a className='hover:text-white' href="linkedin.com"><BiLogoLinkedinSquare/></a></li>
            </ul>
            <p className='f_designer'>Designed by Xiraex</p>
            <p className='f_copyright'>&copy;ChawdandChinmoy2023</p>
        </div>
    </div>
  )
}

export default Footer
