import React from "react";
import { logo } from "@/exports/image-exports";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="sm:self-start">
      <div className="flex gap-1 items-center justify-center sm:justify-start text-white">
        <Image src={logo} alt="logo" className="w-10 invert-none" />
        <p className="font-semibold">NFTInfo</p>
      </div>
      <p className="text-white text-sm">©2023 NFTInfo, All Rights Reserved.</p>
    </div>
  );
};

export default Logo;
