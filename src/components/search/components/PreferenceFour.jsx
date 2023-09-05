import React, { useEffect } from "react";
import Image from "next/image";
import { sandStorm } from "@/exports/image-exports";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const PreferenceFour = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.6,
  })
  const animation = useAnimation()

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
    <div className="min-h-screen flex sm:flex-row md:flex-row lg:flex-row gap-5 flex-col overflow-hidden p-4" ref={ref}>
      <motion.div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%]" initial='hidden' animate={animation} variants={scrollPopVariant}>
        <Image src={sandStorm} className="object-cover w-full h-full" alt="sandstorm"/>
      </motion.div >
      <motion.div className="flex flex-col w-full sm:w-[50%] md:w-[50%] lg:w-[50%] gap-5" ref={ref} variants={scrollVariant} initial='hidden' animate={animation}>
        <div className="flex flex-col gap-3">
          <div className="rounded-full w-8 h-8 bg-black invert-dark"></div>
          <hr className="rounded-md h-1 w-32 bg-gray-400" />
          <p>Get Exchange NFTs</p>
        </div>
        
        <div className="flex flex-row sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse sm:h-full md:h-full lg:h-full">
            <div className="flex flex-col gap-2 sm:self-end ">
                <p className="text-4xl font-semibold">Get NFT Data From Exchanges</p>
                <p>Get data from a data of NFTs from that is available on different exchanges based on how you prefer the data.</p>
                <Link href={'search/getExchangeData'}    className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white">Go Now</Link>
            </div>
        <p className="text-[12rem] font-bold self-end sm:self-start ">4</p>
       
        </div>
      </motion.div>
    </div>
  );
};

export default PreferenceFour;
