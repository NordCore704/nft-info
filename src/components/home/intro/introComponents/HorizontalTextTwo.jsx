import React, { useRef, useEffect} from "react";
import { gsap } from "gsap";
import { BsStars } from "react-icons/bs";

const HorizontalTextTwo = ({ timeline }) => {
    const mainRef = useRef()
    useEffect(() => {
        timeline.to(mainRef.current, {
            opacity: 1,
            duration: 1,
        })
    })
  return (
    <div className="border border-black w-full h-10 absolute top-[70%] sm:top-[80%] md:top-[80%] lg:top-[80%] bg-green-500 -skew-y-12 sm:-skew-y-6 md:-skew-y-6 lg:-skew-y-6 text-center flex gap-2 items-center justify-center overflow-hidden opacity-0 z-50" ref={mainRef}>
      <p className="text-lg font-semibold sliding flex translate-x-full w-full -skew-y-0">
        All NFT Infos at the tip your fingers{" "}
        <BsStars className="text-center text-scheme-red" />
      </p>
    </div>
  );
};

export default HorizontalTextTwo;
