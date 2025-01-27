// import { stagger } from "motion"
import { easeIn, motion } from "motion/react"
// import { stagger } from "framer-motion"



// import React from 'react'

function Landing() {
  return (
    <div className="relative w-full h-[130vh] sm:h-[200vh] ">
      <div className="picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1" className="w-full h-full object-cover object-[85%_15%] " src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
      </div>
      <div className="w-full absolute top-0">
      <div className="max-w-7xl mx-auto h-full text  px-5 sm:px-10 text-white">
        <div className="para mt-64">
          {["Global digital design studio partnering with","brands and businesses that create exceptional","experiences where people live, work, and unwind."].map((elem,index) => (
            <p key={index} className="text-md masker overflow-hidden font-semibold sm:text-2xl sm:font-light ">
              <motion.span 
              initial={{rotate:60,y:"100%",opacity:0}}
              animate={{rotate:0,y:0,opacity:1}}
              transition={{easeIn , duration:1.5,delay:index*0.4}}
              className="inline-block origin-left"
              >
                {elem}
              </motion.span>
            </p>
          ))}
        
        </div>
        <div className="headings mt-20 sm:mt-10 overflow-hidden masker flex flex-col gap-4">
          {["Digital","Design","Experience"].map((elem,index)=>(
              <motion.span 
              initial={{rotate:45,y:"100%",opacity:0}}
              animate={{rotate:0,y:0,opacity:1}}
              transition={{easeIn , duration:1.5,delay:1+index*0.3}}
              key={index} className="text-5xl tracking-tighter sm:text-8xl origin-left y:0" >{elem}</motion.span>
          ))}


            
            
        </div>
        <div className="para2 mt-20  text-sm font-semibold sm:text-lg sm:mt-30 sm:max-w-3xl">
        We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.
        </div>

        <a className=" border-b-[1px] border-zinc-200 inline-block mt-20 sm:mt-25  sm:text-xl sm:border-b-[1px]" href="#">The Studio</a>
        
      </div>
      </div>
      
    </div>
  )
}

export default Landing
