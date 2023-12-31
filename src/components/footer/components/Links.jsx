import React from "react";
import Link from "next/link";

const Links = ({ montserrat }) => {
  return (
    <div className={`flex md:gap-6 lg:gap-6 sm:gap-6 flex-col sm:flex-row md:flex-row lg:flex-row justify-self-center self-center text-white ${montserrat.className}`}>
      <div className="flex gap-1 flex-col">
        <Link
          href={"/"}
          className="font-medium hover:text-green-500 duration-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="font-medium hover:text-green-500 duration-300 transition-colors"
        >
          About
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <Link
          href={"/search"}
          className="font-medium hover:text-green-500 duration-300 transition-colors"
        >
          Search
        </Link>
        <Link
          href={"/contact"}
          className="font-medium hover:text-green-500 duration-300 transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Links;
