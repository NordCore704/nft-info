import React from "react";
import Image from "next/image";
import { avatar } from "@/exports/image-exports";
import { motion } from "framer-motion";

const ContactAvatar = () => {
  const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const textVariant = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  }
  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      variants={parentAnimationVariants}
      initial="init"
      animate="animate"
      transition={{
        ease: "easeInOut",
        delay: 1.8,
        // duration: 0.5,
        staggerChildren: 0.4,
        delayChildren: 2.5,
        type: "spring",
      }}
    >
      <Image
        alt="contact-avatar"
        className="w-32 bg-scheme-red rounded-full hover:bg-green-500 transition-colors duration-500"
        src={avatar}
      />
      <motion.p className="text-2xl font-semibold" variants={textVariant}    transition={{
          ease: "easeInOut",
          duration: .9,
          type: 'spring',
        }}>Simon Peter</motion.p>
    </motion.div>
  );
};

export default ContactAvatar;
