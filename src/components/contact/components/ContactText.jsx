import React from "react";
import { motion } from "framer-motion";

const ContactText = () => {

    const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1

    },

  }
  const hrVariant = {
    init: {
      x: '-200',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    }
  }

  const textAnimationVariants = {
    init: {
      y: '-200',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },

  }
  return (
    <motion.div className="" variants={parentAnimationVariants} initial='init' animate='animate' transition={{
      ease: "easeInOut",
      staggerChildren: 0.5,
      delayChildren: .3,
      type: 'spring',
    }}
    >
      <motion.div className="flex items-center gap-6"
      variants={hrVariant}  transition={{
          ease: "easeInOut",
          // delay: 0.8,
          // duration: 2,
          // staggerChildren: 0.4,
          // delayChildren: 1,
          type: 'spring',
        }}>
        <p className="text-gray-400 text-lg uppercase">contact</p>
        <hr className="w-[80%] h-0.5 bg-black" />
      </motion.div>
      <motion.p className="text-5xl lg:text-7xl md:text-7xl sm:text-7xl font-semibold" variants={textAnimationVariants}  transition={{
          ease: "easeInOut",
          // delay: 0.8,
          // duration: .9,
          // staggerChildren: 0.4,
          // delayChildren: 1,
          type: 'spring',
        }}>
        Meet The Creator
      </motion.p>
    </motion.div>
  );
};

export default ContactText;
