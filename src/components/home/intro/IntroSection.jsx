import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsStars, } from "react-icons/bs";
import { NftStats, NftDisplay, GetStarted, HorizontalTextOne, HorizontalTextTwo } from '@/exports'
import { gsap } from "gsap";

const IntroSection = () => {
  const timeline = gsap.timeline()

  // Each bit of this section has been split into different components 
    // The timeline is passed as props down to the children to make for smooth animation timing
  return (
    <div className="flex flex-col relative gap-5 sm:flex-row lg:flex-row md:flex-row items-center justify-center w-full min-h-screen p-3">
        <NftStats timeline={timeline}/>
        <NftDisplay timeline={timeline}/>
        <GetStarted timeline={timeline}/>
        <HorizontalTextOne timeline={timeline}/>
        <HorizontalTextTwo timeline={timeline}/>
    </div>
  );
};

export default IntroSection;
