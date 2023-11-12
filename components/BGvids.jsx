
import vidSrc from "@/public/assets/videos/This.mp4";

const BGvids = () => {
  return (
    <div>
       <video className="right-0 top-0 object-fill w-full h-[100vh]" src={vidSrc} playsInline autoPlay muted loop type="video/mp4" />
    </div>
  )
}

export default BGvids
