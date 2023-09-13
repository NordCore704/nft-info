import React, { useEffect } from "react";
import { motion, useAnimation, } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { machineNFT } from "@/exports/image-exports";
import Link from "next/link";

const PreferenceTwo = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.6,
  })
  const animation = useAnimation()

  const scrollVariant = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.9,
        type: "spring",
      }
    },
    hidden: {
      x: 150,
      opacity: 0,
    }
  }

  const scrollVariantTwo = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        type: "spring",
      }
    },
    hidden: {
      y: 150,
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
    <div className="h-screen flex flex-col w-full gap-5 items-center" ref={ref}>
      <motion.div className="w-full h-[50%] flex lg:flex-row md:flex-row sm:flex-row flex-col-reverse lg:justify-between sm:justify-between md:justify-between gap-4" animate={animation} variants={scrollVariant} initial='hidden'>
        <div className="">
          <div className="flex flex-col gap-3">
            <div className="rounded-full w-8 h-8 bg-black invert-dark"></div>
            <hr className="rounded-md h-1 w-32 bg-gray-400" />
            <p>Find specific NFTs with specific data</p>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-[50%] sm:w-[50%] bg-green-500 h-[50%] md:h-full sm:h-full lg:h-full">
          <Image
            src={machineNFT}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <motion.div className="flex gap-4 sm:justify-between lg:justify-between md:justify-between justify-between" animate={animation} variants={scrollVariantTwo} initial='hidden'>
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-semibold">Find Your NFTs</p>
          <p>
            Do You have any "strange" NFTs with little or no data on them,
            perhaps you want to know their current price, well this will help
            you run a wide search across the selected blockchain with some
            details of your NFT and bring you results.
          </p>
          <Link
            href={"/search/find"}
            className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
          >
            Try It Out
          </Link>
        </div>
        <p className="text-9xl font-bold">2</p>
      </motion.div>
    </div>
  );
};

export default PreferenceTwo;
