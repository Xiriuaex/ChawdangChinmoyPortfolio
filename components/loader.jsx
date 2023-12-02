 
import Image from "next/image";
import gifImg from "../public/assets/cam-ap1.gif";

import '@/styles/loader.css';
const loader = () => {
  return (
    <div className="loadingImg h-[50vh]">
      <Image className="m-auto" src={gifImg} alt="loading-icon" width={80}/>
    </div>
  )
}

export default loader
