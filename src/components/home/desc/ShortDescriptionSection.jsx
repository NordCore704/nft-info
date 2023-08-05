import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  nftGirl,
  nftWhite,
  retroNft,
  layer,
  screws,
} from "@/exports/image-exports";
import { gsap, Power3 } from "gsap";


gsap.registerPlugin(ScrollTrigger)
const ShortDescriptionSection = () => {


  // This section features a scroll animation, so therefore code splitting becomes complex and may not be applicable but nevertheless it's worth the trade-off
    // The useRef variables all reference an element on the screen that will be animated on scroll
    // useEffect is used to handle the scroll-linked animations
  const scrollPinRef = useRef()
  const imageRef = useRef()
  const headerRef = useRef()
  const textRef = useRef()
  const buttonRef = useRef()
  const screwRef = useRef()
  const layerRef = useRef()

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
          trigger: scrollPinRef.current,
            scrub: true,
            pin: true,
            pinSpacing: true,
            // toggleActions: "play reverse play reverse",
            toggleActions: 'restart complete reverse reset', 
            start: 'top top',
            end: '+=110vh',
            anticipatePin: true,
            invalidateOnRefresh: true,
      },
    })
    timeline.to(imageRef.current, {
      opacity: 1,
      y: 0,
      transition: Power3.easeInOut,
      ease: 'ease-in',
      duration: 2,
    })
    timeline.to(headerRef.current, {
      opacity: 1,
      y: 0,
      transition: Power3.easeInOut,
      ease: 'ease-in',
      duration: 2,
    })
    timeline.to(textRef.current, {
      opacity: 1,
      y: 0,
      transition: Power3.easeInOut,
      ease: 'ease-in',
      duration: 2,
    })
    timeline.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      transition: Power3.easeInOut,
      ease: 'ease-in',
      duration: 2,
    })
    timeline.to(screwRef.current, {
      opacity: 1,
      y: 0,
      transition: Power3.easeInOut,
      ease: 'ease-in',
      duration: 2,
    })
    timeline.to(layerRef.current, {
      opacity: 1,
      y: 0,
      transition: Power3.easeInOut,
      ease: 'ease-in',
      duration: 2,
    })
  })
  return (
    <div className="relative flex flex-col md:flex-row lg:flex-row gap-3 p-5 overflow-hidden items-center justify-center rounded-md bg-gray-300" ref={scrollPinRef} >
      {/* <video src="../"></video> */}
      <Image
        src={nftWhite}
        alt="nft"
        className="md:w-[50%] lg:ml-4 self-center opacity-0 -translate-y-40 rounded-md"
        ref={imageRef}
      />
      <div className="flex items-center flex-col justify-center gap-3 self-center md:w-[50%] lg:w-[50%] relative">
        <Image
          src={layer}
          alt="screw-image"
          className="w-10 absolute -z-10 top-0 left-6 rotating opacity-0" ref={layerRef}
        />
        <Image
          src={screws} alt="screw-image"
          className="w-10 absolute bottom-2 right-[25%] -z-10 rotating-2 opacity-0" ref={screwRef}
        />
        <p className="text-3xl capitalize font-semibold text-center opacity-0 translate-y-6" ref={headerRef}>
          Collect Valuable Information on Rarites
        </p>
        <p className="text-center opacity-0 translate-y-6" ref={textRef}>
          Get data on NFTs that are considered rare in the global marketplace,
          as long as it exists on it's respective blockchain, we will bring it's
          data to you with a single search.
        </p>
        <Link
          href={"/search"}
          className="py-3 px-5 hover:bg-green-500 rounded-full text-center font-semibold bg-scheme-red duration-300 transition-colors opacity-0 translate-y-10 w-40" ref={buttonRef}
        >
          Search Now
        </Link>
      </div>
    </div>
  );
};

export default ShortDescriptionSection;
