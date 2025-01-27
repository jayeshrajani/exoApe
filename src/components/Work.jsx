import { useState } from "react";
import greenery from "../assets/greenery.mp4";
import sust from "../assets/sust.mp4";
import { easeIn,motion } from "framer-motion";


function Work() {
 
  const [elems, setElems] = useState([
    {
      heading: "EcoSphere",
      subheading: "Innovating a greener tomorrow",
      video: greenery,
    },
    {
      heading: "Cambium",
      subheading: "Pioneering sustainable solutions",
      video: sust,
    },
    {
      heading: "Verdant Edge",
      subheading: "Leading the way in eco-friendly innovation",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04",
    },
    {
      heading: "GreenWave",
      subheading: "Driving sustainability through cutting-edge solutions",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
    },
  ]);

  return (
    <div className="w-full relative bg-zinc-200">
      <div className="max-w-7xl mx-auto py-20 px-5 sm:px-10 ">
        <h1 className="sm:ml-13">featured projects</h1>
        <h3 className="text-9xl mt-4 sm:ml-13 overflow-hidden">
          <motion.span
          initial={{ rotate: 90, y: "40%", opacity: 0 }}
          whileInView={{ rotate:0,y: 0, opacity:1}}
          transition={{easeIn , duration:0.5,delay:1*0.3}}    
          className="inline-block origin-left"      
          >Work
          
          </motion.span>
          
          
          </h3>
        <p className="mt-4 leading-none tracking-normal sm:ml-13">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems mt-10 sm:flex sm:flex-wrap sm:gap-4 justify-evenly">
          {elems.map((elem, index) => {
            return (
              <div
                key={index}
                className="elem w-full sm:w-[48%] lg:w-[43%] mt-12 flex-shrink-0 "
              >
                <div className="video w-full h-[60vw] sm:h-[30vw] lg:h-[20vw] bg-red-300 overflow-hidden">
                  <motion.video
                  
                    className="w-full h-full object-cover scale-[1.6]"
                    autoPlay
                    muted
                    loop
                    whileHover={{scale:1.2}}
                    src={elem.video}
                  ></motion.video>
                </div>
                <div className="mt-2">
                  <h1 className="font-semibold">{elem.heading}</h1>
                  <p className="text-zinc-600">{elem.subheading}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
