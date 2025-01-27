import React, { useEffect, useRef } from "react";
import greenery from "../assets/greenery.mp4";
import man from "../assets/man.mp4";
import news from "../assets/news.mp4";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Images() {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the first video
    gsap.to(first.current, {
      x: "60%", // Move horizontally by 40% of the element width
      ease: "linear",
      scrollTrigger: {
        trigger: first.current, 
        start: "top bottom", // Start when the top of the element reaches the bottom of the viewport
        end: "top top", // End when the top of the element reaches the top of the viewport
        scrub: 1, // Scrub the animation with the scroll
      },
    });

    // Animation for the third video
    gsap.to(third.current, {
      x: "-40%",
      ease: "linear",
      scrollTrigger: {
        trigger: third.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });

    gsap.to(second.current, {
      y: "40%",
      ease: "linear",
      scrollTrigger: {
        trigger: third.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });

    gsap.to(fourth.current, {
      x: "40%",
      // y: "40%",
      ease: "linear",
      scrollTrigger: {
        trigger: third.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });

  }, []);

  return (
    <div
      ref={parent}
      className="w-full h-[50vh] sm:h-[80vh] bg-zinc-100 relative"
    >
      
      <div className="centre-img top-1/2 left-1/2 absolute w-36 -translate-x-1/2 -translate-y-1/2 sm:w-96 sm:mt-20">
        <img
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>

      
      <div
        ref={first}
        className="absolute w-32 aspect-video top-30 sm:top-40 left-15 sm:left-80 sm:w-72"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src={man}
        ></video>
      </div>

      <div ref={second}
      className="absolute w-20 h-28 sm:w-60 sm:h-72 top-30 right-15 sm:right-90">
        <img
          className="w-full h-full object-scale-up object-center"
          src="https://plus.unsplash.com/premium_photo-1737659254856-bb79e14b3ea5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      
      <div
        ref={third}
        className="absolute w-20 sm:w-50 aspect-video top-60 left-15 sm:top-100 sm:left-100"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src={greenery}
        ></video>
      </div>

      <div ref={fourth} className="absolute sm:w-64 w-32 aspect-video top-65 sm:top-120 right-20 sm:right-80">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src={news}
        ></video>
      </div>
    </div>
  );
}

export default Images;
