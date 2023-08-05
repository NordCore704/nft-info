import React, {useRef, useEffect } from 'react'
import Image from 'next/image'
import { displayNFT } from "@/exports/image-exports";
import { Power3 } from 'gsap';
import {motion} from 'framer-motion'

const NftDisplay = () => {

  const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1

    },

  }

  const nftAnimationVariants = {
    init: {
      y: "-600",
      opacity: 0,
    },
    animate: {
     y: 0,
    opacity: 1,
    },

  }
  return (
    <motion.div className="flex flex-col gap-5" variants={parentAnimationVariants} initial='init' animate='animate' transition={{
      ease: 'easeInOut',
      duration: .5,
      staggerChildren: 0.4,
      delayChildren: 1,
    }}>
    <div className="self-center">
      <h1 className={`text-5xl font-bold capitalize text-center mb-5`}>
        Get data on
      </h1>
      <p className="text-center text-3xl font-bold bg-green-400 rounded-full p-2 -rotate-3">
        NFTs
      </p>
    </div>
    <motion.div className="rounded-t-lg bg-bottom bg-gradient-to-b from-green-600 relative" variants={nftAnimationVariants} transition={{
      ease: 'easeInOut',
      duration: .8,
      type: 'spring',
      stiffness: 40,
      damping: 10,
    }}>
      <Image
        src={displayNFT}
        className="relative w-[100%] md:top-0 -top-14 sm:top-0 lg:-top-14"
        alt='nft-display'
      />
    </motion.div>
    {/* <div className="absolute w-[80%] h-[60%] top-10 bg-green-500 z-0"></div> */}
  </motion.div>
  )
}

export default NftDisplay