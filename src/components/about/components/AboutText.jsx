import React from "react";
import { motion } from "framer-motion";

const AboutText = () => {
  const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };
  const textAnimationVariants = {
    init: {
      opacity: 0,
      y: '-300'
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="p-3">
      <motion.div
        className="mt-4 flex flex-col items-start sm:flex-row md:flex-row lg:flex-row sm:justify-between md:justify-between lg:justify-between"
        variants={parentAnimationVariants}
        initial="init"
        animate="animate"
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          staggerChildren: 0.4,
          delayChildren: 1,
        }}
      >
        <p className="text-7xl text-center font-semibold">Get to</p>
        <p className="text-7xl text-center font-semibold">Know Us</p>
      </motion.div>
      <motion.div
        className="mt-3"
        variants={textAnimationVariants}
        animate="animate"
        initial="init"
        transition={{
          ease: "easeInOut",
          delay: 0.8,
          duration: .9,
          staggerChildren: 0.4,
          delayChildren: 1,
          type: 'spring',
        }}
      >
        <p>
          NftInfo is a solo project created by a developer with a good interest
          in NFTs, it was created so anyone with less or no information about
          the NFTs they are interested in owning could get some base research on
          their NFTs (Know Your NFTs😀) before actively entering ownership
          terms.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutText;
