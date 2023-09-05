import React, { useEffect, } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  nftGirl,
  nftWhite,
  retroNft,
  layer,
  screws,
} from "@/exports/image-exports";


const ShortDescriptionSection = () => {

  const [ ref, inView ] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  })
  const animation = useAnimation()
  // This section features a scroll animation, so therefore code splitting becomes complex and may not be applicable but nevertheless it's worth the trade-off
    // The useRef variables all reference an element on the screen that will be animated on scroll
    // useEffect is used to handle the scroll-linked animations
    const opacityVariant = {
      visible: {
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 1,
          type: "spring",
        },
      },
      hidden: {
        opacity: 0,
      }
    }
    const scrollPopVariant = {
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 1,
          type: "spring",
        }
      },
      hidden: {
        x: 150,
        opacity: 0,
        zIndex: 2,
      }
    }
    const scrollVariant = {
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 1.8,
          type: "spring",
        }
      },
      hidden: {
        x: -150,
        opacity: 0,
      }
    }

    useEffect(() => {
   
      if(inView){
        animation.start("visible")
      } else {
        animation.start("hidden")
      }
  
    }, [inView])
 
  return (
    <div className="relative flex flex-col md:flex-row lg:flex-row gap-3 p-5 overflow-hidden items-center justify-center rounded-md bg-gradient-to-br from-scheme-green-dark to-scheme-" ref={ref} variants={opacityVariant}  animate={animation} initial='hidden'>
      {/* <video src="../"></video> */}
      <motion.div className="md:w-[50%] lg:ml-4 self-center rounded-md" variants={scrollPopVariant} initial='hidden' animate={animation}>
      <Image
        src={retroNft}
        alt="nft"
        className=""
        
      />
      </motion.div>
    
      <motion.div className="flex items-center flex-col justify-center gap-3 self-center md:w-[50%] lg:w-[50%] relative" variants={scrollVariant} initial='hidden' animate={animation}>
        <Image
          src={layer}
          alt="screw-image"
          className="w-10 absolute -z-10 top-0 left-6 rotating"
        />
        <Image
          src={screws} alt="screw-image"
          className="w-10 absolute bottom-2 right-[25%] -z-10 rotating-2"
        />
        <p className="text-3xl capitalize font-semibold text-center">
          Collect Valuable Information on Rarites
        </p>
        <p className="text-center">
          Get data on NFTs that are considered rare in the global marketplace,
          as long as it exists on it's respective blockchain, we will bring it's
          data to you with a single search.
        </p>
        <Link
          href={"/search"}
          className="py-3 px-5 hover:bg-scheme-green hover:text-white rounded-full text-center font-semibold bg-green-500 duration-300 transition-colors w-40"
        >
          Search Now
        </Link>
      </motion.div>
    </div>
  );
};

export default ShortDescriptionSection;
