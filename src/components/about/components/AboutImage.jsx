import React from 'react'
import Image from 'next/image'
import { retroNftFull, nftPortrait, vrNft } from '@/exports/image-exports'
import { motion } from 'framer-motion'


const AboutImage = () => {
  const imageAnimationVariantOne = {
    init: {
      opacity: 0,
      x: '-200'
    },
    animate: {
      opacity: 1,
      x: 0,
    }
  }
  const imageAnimationVariantTwo = {
    init: {
      opacity: 0,
      x: '200',
    },
    animate: {
      opacity: 1,
      x: 0,
    }
  }
  return (
    <div className='w-full flex flex-col md:flex-row sm:flex-row lg:flex-row'>
      <motion.div className="w-full md:w-[50%] lg:w-[50%] sm:w-[50%]" variants={imageAnimationVariantOne} initial='init' animate='animate' transition={{
          ease: "easeInOut",
          delay: 0.9,
          duration: 1,
          staggerChildren: 0.4,
          delayChildren: 1,
          type: 'spring',
        }}>
      <Image alt='about-image' className='object-cover w-full h-full' src={nftPortrait}/>
      </motion.div>
        <motion.div className="w-full md:w-[50%] lg:w-[50%] sm:w-[50%]" variants={imageAnimationVariantTwo} initial='init' animate='animate' transition={{
          ease: "easeInOut",
          delay: 0.9,
          duration: 1,
          staggerChildren: 0.4,
          delayChildren: 1,
          type: 'spring',
        }}>
        <Image alt='about-image' className='object-cover'  src={vrNft}/>
        </motion.div>
       
    </div>
  )
}

export default AboutImage