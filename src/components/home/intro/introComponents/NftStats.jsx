import React, { useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { gsap, Power3 } from "gsap";

const NftStats = ({ timeline, montserrat, ubuntu }) => {
  // Each ref on this section represents an element to be animated with GSAP
  // 
  const bodyRef = useRef();
  const starRef = useRef();
  const textRefOne = useRef();
  const textRefTwo = useRef();
  const textRefThree = useRef();

  useEffect(() => {
    timeline
      .to(bodyRef.current, {
        delay: 1,
        opacity: 1,
        duration: 1,
        transition: Power3.easeInOut,
        ease: "ease-in",
      })
      .to(starRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        transition: Power3.easeInOut,
        ease: "ease-in",
      })
      .to(textRefOne.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        transition: Power3.easeInOut,
        ease: "ease-in",
      })
      .to(textRefTwo.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        transition: Power3.easeInOut,
        ease: "ease-in",
      })
      .to(textRefThree.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        transition: Power3.easeInOut,
        ease: "ease-in",
      });
  });

  return (
    <div
      className={`flex sm:flex-col md:flex-col lg:flex-col items-center justify-center gap-2 p-5 opacity-0 sm:w-[30%] md:w-[30%] lg:w-[30%] ${montserrat.className}`}
      ref={bodyRef}
    >
      <p className="opacity-0 translate-x-6" ref={starRef}>
        <BsStars className="text-3xl mb-3 text-green-500 w-[100%]" />
      </p>

      <div className="opacity-0 -translate-y-6" ref={textRefOne}>
        <p className={`font-bold text-4xl ${ubuntu.className}`}>120+</p>
        <p>NFT Arts</p>
      </div>
      <div className="opacity-0 -translate-y-6" ref={textRefTwo}>
        <p className={`text-4xl text-center font-bold ${ubuntu.className}`}>45+</p>
        <p className={`text-center`}>Active Blockchains</p>
      </div>
      <div className="opacity-0 -translate-y-6" ref={textRefThree}>
        <p className={`text-4xl font-bold ${ubuntu.className}`}>160+</p>
        <p>NFT Artists</p>
      </div>
    </div>
  );
};

export default NftStats;
