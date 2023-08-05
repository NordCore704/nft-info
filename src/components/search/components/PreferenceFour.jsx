import React from "react";
import Image from "next/image";
import { sandStorm } from "@/exports/image-exports";
import Link from "next/link";

const PreferenceFour = () => {
  return (
    <div className="min-h-screen flex sm:flex-row md:flex-row lg:flex-row gap-5 flex-col overflow-hidden p-4">
      <div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%]">
        <Image src={sandStorm} className="object-cover w-full h-full" alt="sandstorm"/>
      </div>
      <div className="flex flex-col w-full sm:w-[50%] md:w-[50%] lg:w-[50%] gap-5">
        <div className="flex flex-col gap-3">
          <div className="rounded-full w-8 h-8 bg-black invert-dark"></div>
          <hr className="rounded-md h-1 w-32 bg-gray-400" />
          <p>Get Exchange NFTs</p>
        </div>
        
        <div className="flex flex-row sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse sm:h-full md:h-full lg:h-full">
            <div className="flex flex-col gap-2 sm:self-end ">
                <p className="text-4xl font-semibold">Get NFT Data From Exchanges</p>
                <p>Get data from a data of NFTs from that is available on different exchanges based on how you prefer the data.</p>
                <Link href={'search/getExchangeData'}    className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white">Go Now</Link>
            </div>
        <p className="text-[12rem] font-bold self-end sm:self-start ">4</p>
       
        </div>
      </div>
    </div>
  );
};

export default PreferenceFour;
