import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const CategoriesSearch = ({ montserrat, ubuntu}) => {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const animation = useAnimation()

  const scrollPopVariant = {
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
      x: -150,
      opacity: 0,
    }
  }
  const scrollVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.8,
        type: "spring",
      }
    },
    hidden: {
      y: 150,
      opacity: 0,
      zIndex: -10,
    }
  }

  useEffect(() => {
   
    if(inView){
      animation.start("visible")
    } else {
      animation.start("hidden")
    }

  }, [inView])
  // This section includes a video of an NFT and some text, it is a template component for its parent
  return (
    <div className={`flex gap-3 flex-col md:flex-row-reverse lg:flex-row-reverse items-center justify-center my-10 p-5 ${montserrat.className}`} ref={ref}>
        <motion.video src="/nft-video.mp4" className='w-full h-full object-contain rounded-md' autoPlay loop initial='hidden' variants={scrollVariant} animate={animation}></motion.video>
        <div className="flex flex-col gap-3">
        <motion.p className={`capitalize font-semibold text-4xl text-center ${ubuntu.className}`} animate={animation} initial='hidden' variants={scrollPopVariant}>Search According To preferences and Categories</motion.p>
        <motion.p className='text-center' initial='hidden' variants={scrollVariant} animate={animation}>A few little tweaks to match what you want and the results will come flying at you just as requested with the search preferences feature.</motion.p>
        </div>
        
    </div>
  )
}

export default CategoriesSearch