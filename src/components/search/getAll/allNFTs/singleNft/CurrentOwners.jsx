import React from 'react'
import { motion } from 'framer-motion'

const CurrentOwners = ({ data }) => {
  const animtionVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    }
  }
  return (
    <motion.div className="gap-3 bg-gray-400 justify-start ml-5 rounded-md p-4 flex flex-col" variants={animtionVariants}
    initial='init'
     animate='animate'
     transition={{
      ease: "easeInOut",
      delay: .2,
        duration: 0.9,
      staggerChildren: 0.4,
      delayChildren: 6,
      type: "spring",
    }}
     >
      {data !== null ?
      <>
      {data.map((data, index) => (
        <div className="border-t border-b border-black p-2" key={index}>
          <p className='font-semibold'>Address: <span className='font-medium'>{data.address}</span></p>
          <p className='font-semibold'>Quantity: <span className='font-medium'>{data.quantity}</span></p>
        </div>
      ))}
      </>
      :
      <>
        <p>Data Not Avialable</p>
      </>
}
  </motion.div>
  )
}

export default CurrentOwners