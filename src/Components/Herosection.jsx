import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Herosection() {
  useGSAP(() => {
    gsap.from('#text', {
      ease: 'bounce.out',
      y: -100,
      autoAlpha: 0, // fades in and handles visibility
      duration: 2,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1
        id="text"
        className="text-center text-transparent bg-clip-text
                   bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#fcb69f]
                   text-4xl sm:text-5xl lg:text-6xl font-extrabold 
                   tracking-wide drop-shadow-md">
        Arch Complete Solution
      </h1>

     {/* bg-clip-text, text-transparent,bg-gradient-to-r, drop-shadow-md */}

      {/* bg-cover */}
      {/* about */}
      {/* services */}
      {/* contact */}
      {/* our project */}
    </div>
  );
}

export default Herosection;
