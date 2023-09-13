import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsStars, } from "react-icons/bs";
import { NftStats, NftDisplay, GetStarted, HorizontalTextOne, HorizontalTextTwo } from '@/exports'
import { gsap } from "gsap";

const IntroSection = ({ montserrat, ubuntu}) => {
  const timeline = gsap.timeline()

  // Each bit of this section has been split into different components 
    // The timeline is passed as props down to the children to make for smooth animation timing
  return (
    <div className="flex flex-col relative gap-5 sm:flex-row lg:flex-row md:flex-row items-center justify-center w-full min-h-screen p-3">
        <NftStats timeline={timeline} montserrat={montserrat} ubuntu={ubuntu}/>
        <NftDisplay timeline={timeline} montserrat={montserrat} ubuntu={ubuntu}/>
        <GetStarted timeline={timeline} montserrat={montserrat} ubuntu={ubuntu}/>
        <HorizontalTextOne timeline={timeline} montserrat={montserrat} ubuntu={ubuntu}/>
        <HorizontalTextTwo timeline={timeline} montserrat={montserrat} ubuntu={ubuntu}/>
    </div>
  );
};

export default IntroSection;
