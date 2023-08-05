import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { machineNFT } from "@/exports/image-exports";
import Link from "next/link";

const PreferenceTwo = () => {
  return (
    <div className="h-screen flex flex-col w-full gap-5 items-center">
      <div className="w-full h-[50%] flex lg:flex-row md:flex-row sm:flex-row flex-col-reverse lg:justify-between sm:justify-between md:justify-between gap-4">
        <div className="">
          <div className="flex flex-col gap-3">
            <div className="rounded-full w-8 h-8 bg-black invert-dark"></div>
            <hr className="rounded-md h-1 w-32 bg-gray-400" />
            <p>Find specific NFTs with specific data</p>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-[50%] sm:w-[50%] bg-green-500 h-[50%] md:h-full sm:h-full lg:h-full">
          <Image
            src={machineNFT}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex gap-4 sm:justify-between lg:justify-between md:justify-between justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-semibold">Find Your NFTs</p>
          <p>
            Do You have any "strange" NFTs with little or no data on them,
            perhaps you want to know their current price, well this will help
            you run a wide search across the selected blockchain with some
            details of your NFT and bring you reults.
          </p>
          <Link
            href={"/search/find"}
            className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
          >
            Try It Out
          </Link>
        </div>
        <p className="text-9xl font-bold">2</p>
      </div>
    </div>
  );
};

export default PreferenceTwo;
