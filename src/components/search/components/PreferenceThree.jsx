import React from "react";
import Image from "next/image";
import Link from "next/link";
import { astroArt, astroBit, astroNFT } from "@/exports/image-exports";

const PreferenceThree = () => {
  return (
    <div className="flex h-screen gap-3 flex-col sm:flex-row md:flex-row lg:flex-row mb-14 sm:overflow-hidden">
      <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] flex items-center justify-center">
      <div className="flex sm:flex-col md:flex-col lg:flex-col flex-row gap-2 items-center justify-center">
      <div className="w-24 h-0.5 rotate-90 mb-8 sm:mb-12 md:mb-12 lg:mb-12 bg-gray-400"/>
          <div className="w-5 h-5 bg-black rounded-full invert-dark"></div>
          <p className="line-text">Search By owners</p>
          <div className="w-24 h-0.5 rotate-90 mt-8 sm:mt-12 md:mt-12 lg:mt-12 bg-gray-400"/>
        </div>
        
        <p className="lg:text-[25rem] text-[13rem] font-bold">3</p>
       
      </div>
      <div className="h-[20%] sm:h-full md:h-full lg:h-full sm:w-[25%] md:w-[25%] lg:w-[30%] flex sm:flex-col md:flex-col lg:flex-col gap-1 justify-center">
        <Image
          alt="image"
          src={astroArt}
          className="object-cover h-full sm:h-[35%] sm:w-full md:h-full lg:h-full w-[30%]"
        />
        <Image
          alt="image"
          src={astroNFT}
          className="object-cover h-full sm:h-[35%] md:h-[25%] w-[30%] sm:w-full"
        />
        <Image
          alt="image"
          src={astroBit}
          className="object-cover sm:h-[35%] w-full"
        />
      </div>
      <div className="sm:w-[45%] md:w-[45%] lg:w-[45%] h-full flex flex-col items-center self-center justify-center gap-4">
        <p className="text-4xl font-semibold text-center capitalize">
          Get Ownership data
        </p>
        <p className="text-center">
          Curious about how many people own a certain NFT? Over here, you could
          get ownership data on NFTs based on your provided inputs.
        </p>
        <Link
            href={"/search/getOwnerData"}
            className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
          >
            Check It Out
          </Link>
      </div>
    </div>
  );
};

export default PreferenceThree;
