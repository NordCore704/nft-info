import { nftPortrait, retroNftFull, vrNft } from "@/exports/image-exports";
import { CategoriesSearch } from "@/exports";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Image from "next/image";

const OverlayBg = ({ montserrat, ubuntu}) => {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const animation = useAnimation()

  const scrollPopVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.9,
        type: "spring",
      }
    },
    hidden: {
      y: -150,
      opacity: 0,
      zIndex: -20,
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
  return (
    <section className={`flex flex-col items-center justify-center p-5 gap-8 ${montserrat.className}`} ref={ref}>
      {/* <hr className="w-full mb-4 h-0.5 bg-gray-500" /> */}
      {/* <CategoriesSearch /> */}
      {/* <hr className="w-full mt-4 h-0.5 bg-gray-500" /> */}
      <div className="flex flex-col gap-5 items-center justify-center p-5 md:flex-row lg:flex-row">
        <motion.div className="flex gap-3" variants={scrollVariant} initial='hidden' animate={animation}>
          <Image
            alt="avatar"
            src={retroNftFull}
            className="w-10 h-10 rounded-full object-cover"
          />
          <article className="bg-scheme-green p-3 rounded-md border text-white">
            <p className={`capitalize text-2xl font-semibold ${ubuntu.className}`}>
              A retro NFT or so?
            </p>
            <p>
              Are you a fan of retro NFTs or something like that? well you could
              get the one you so desire, with a customised search through our
              vast database of NFTs.
            </p>
          </article>
        </motion.div>
        <motion.div className="flex gap-3" variants={scrollPopVariant} initial='hidden' animate={animation}>
          <Image src={vrNft} alt="avatar" className="w-10 h-10 rounded-full" />
          <article className="bg-scheme-green p-3 rounded-md border text-white">
            <p className={`capitalize text-2xl font-semibold ${ubuntu.className}`}>The Cartoon Guy</p>
            <p className="">
              You may probably prefer NFTs with a cartoon-like nature, sure we
              could do you that too. You just have to set your preference in
              your every search.
            </p>
          </article>
        </motion.div>
        <motion.div className="flex gap-3" variants={scrollVariant} initial='hidden' animate={animation}>
          <Image
            alt="avatar"
            src={nftPortrait}
            className="w-10 h-10 rounded-full"
          />
          <article className="bg-scheme-green p-3 rounded-md border text-white">
            <p className={`${ubuntu.className} capitalize text-2xl font-semibold`}>
              Oh, you want a Portrait
            </p>
            <p>
              A collector of portraits and real artwork? It really doesn't have
              to be just a photo, if it's a portrait and also an NFT that
              exists, we will let you know.
            </p>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default OverlayBg;
