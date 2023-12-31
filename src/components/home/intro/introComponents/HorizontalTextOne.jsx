import React, { useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { gsap } from "gsap";


const HorizontalTextOne = ({ timeline , montserrat}) => {
    const mainRef = useRef()
    
    useEffect(() => {
        timeline.to(mainRef.current, {
            opacity: 1,
            duration: 1,

        })
    })
  return (
    <div className={`border w-full h-10 absolute top-[70%] sm:top-[80%] md:top-[80%]  lg:top-[80%] bg-green-500  text-center flex gap-2 items-center justify-center overflow-hidden skew-y-12 sm:skew-y-6 md:skew-y-6 lg:skew-y-6 opacity-0 ${montserrat.className}`} ref={mainRef}>
      <p className="sliding2 text-lg font-semibold flex translate-x-full w-full skew-y-0 text-white" >
        Use NFTInfo today, know more about your NFTs
        <BsStars className="text-center text-scheme-yellow" />
      </p>
    </div>
  );
};

export default HorizontalTextOne;
