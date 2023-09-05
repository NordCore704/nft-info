import React from 'react'
import { motion } from 'framer-motion'
import { PreferenceOne, PreferenceTwo, PreferenceThree, PreferenceFour } from '@/exports'

const Search = () => {
  const popVariant = {
    visible: {
      scale: 1,
      opacity: 1,
    },
    hidden: {
      scale: 0,
     
    }
  }

  return (
    <div className='p-4 flex flex-col gap-8'>
        <motion.p className='text-4xl font-bold text-center mt-4' variants={popVariant}  transition={{
          ease: "easeInOut",
          duration: 0.9,
          type: "spring",
        }} initial='hidden'  animate='visible'>Please Select Your Search Preference Below:</motion.p>
        <PreferenceOne />
        <PreferenceTwo />
        <PreferenceThree />
        <PreferenceFour />
    </div>
  )
}

export default Search