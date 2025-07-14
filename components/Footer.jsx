
import '@/styles/Footer.css';
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='footer'> 
        <div className='mb-6 mt-10'>
            <p className='f_name'>ChawdangChinmoy</p>
            <p className='f_details'>an enthusiast filmmaker</p>
            <p className='f_connect'>Connect</p>
            <ul className='f_links'>
                <li><a className='hover:text-white' href="https://www.facebook.com/profile.php/?id=61552144665740"><BiLogoFacebookSquare/></a></li>
                <li><a className='hover:text-white' href="https://www.instagram.com/freakyframes.cine?igshid=YTQwZjQ0NmI0OA=="><BiLogoInstagramAlt/></a></li>
                <li><a className='hover:text-white' href="https://www.linkedin.com/in/chawdang-chinmoy-45ba91266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><BiLogoLinkedinSquare/></a></li>
            </ul>
            <p className='f_designer'>Designed by <a href = "mailto: pragyanchetia22@gmail.com?subject=For Work Purpose"><span className='hover:content-["contact!"]'>pragyanC</span></a></p>
            <p className='f_copyright'>&copy;ChawdandChinmoy2023</p>
        </div>
    </div>
  )
}

export default Footer
