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
    <motion.div className="flex flex-col gap-5" variants={parentAnimationVariants}  initial='init' animate='animate' transition={{
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
    <motion.div className="rounded-t-lg bg-gradient-to-b lg:bg-gradient-to-t  from-green-600 lg:to-scheme-green-dark relative lg:z-30" variants={nftAnimationVariants} transition={{
      ease: 'easeInOut',
      duration: .8,
      type: 'spring',
      stiffness: 40,
      damping: 10,
    }}>
      <Image
        src={displayNFT}
        className="relative w-[100%] md:top-0 -top-14 sm:top-0 lg:-top-14 lg:z-40"
        alt='nft-display'
      />
    </motion.div>
   
  </motion.div>
  )
}

export default NftDisplay