import React from "react";
import { logo } from "@/exports/image-exports";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="">
      <div className="flex gap-2 items-center text-white ">
        <Image src={logo} alt="logo" className="w-10 invert-none" />
        <p className="font-semibold">NFTInfo</p>
      </div>
      <p className="text-white">©2023 NFTInfo</p>
    </div>
  );
};

export default Logo;
