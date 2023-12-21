
//herosection video:
import vidSrc from "@/public/assets/videos/that.mp4";

//Header styles css:
import "@/styles/Hero.css"; 

const Hero = () => {
  return (
    <div>
      <video className="hero relative right-0 -top-20 object-fill w-full h-[100vh]" src={vidSrc} playsInline autoPlay muted loop type="video/mp4" />
      <div className='heading'>
        <h1 className='mobile:text-4xl tablet:text-5xl laptop:text-6xl'>CHAWDANG CHINMOY</h1>
        <h1 className='mobile:text-xl tablet:text-3xl font-semibold'>Enthusiast Filmmaker</h1>
      </div>
    </div>
  )
}

export default Hero
