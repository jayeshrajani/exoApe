import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PlayReel() {
  const videoContainerRef = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    

    
    gsap.to(videoContainer, {
      scale: 2, 
      scrollTrigger: {
        trigger: videoContainer,
        start: "top center",
        end: "bottom top", 
        scrub: 1, 
      },
    });
    gsap.to(play.current, {
      x:"80%", 
      scrollTrigger: {
        trigger: videoContainer,
        start: "top center",
        end: "bottom top", 
        scrub: 1, 
      },
    });
    gsap.to(reel.current, {
      x:"-80%", 
      scrollTrigger: {
        trigger: videoContainer,
        start: "top center",
        end: "bottom top", 
        scrub: 1, 
      },
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-black py-20">
      
      <div className="overlay w-full h-full text-white flex flex-col justify-between px-5 sm:px-1">
        <div className="w-full flex justify-center">
          <h3>Work in motion</h3>
        </div>
        <p className="flex justify-center items-center text-center text-xs">
          Our work is best experienced in motion. Don’t forget to put on your headphones.
        </p>
      </div>

      
      <div
        ref={videoContainerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-center"
      >
        <div className="w-40 sm:w-96 aspect-video">
          <video
            autoPlay
            muted
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
          ></video>
        </div>

        
        <div className="absolute text-white">
          <div className="flex gap-30 sm:gap-64 mt-3">
            <h1 ref={play} className="text-6xl sm:text-9xl font-light tracking-tight">Play</h1>
            <h1 ref={reel} className="text-6xl sm:text-9xl font-light tracking-tight">Reel</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayReel;
