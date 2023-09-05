import React from "react";
import {
  BsInstagram,
  BsLinkedin,
  BsEnvelope,
  BsTwitter,
} from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex gap-2 lg:gap-4 self-center sm:self-end justify-self-center sm:justify-self-end  text-white">
      <a href="" className="rounded-full invert-dark bg-green-500 p-3">
        <BsInstagram className="font-semibold hover:text-scheme-green-dark duration-300 transition-colors" />
      </a>
      <a href="" className="rounded-full invert-dark bg-green-500 p-3">
        <BsTwitter className="font-semibold hover:text-scheme-green-dark duration-300 transition-colors" />
      </a>
      <a href="" className="rounded-full invert-dark bg-green-500 p-3">
        <BsLinkedin className="font-semibold hover:text-scheme-green-dark duration-300 transition-colors" />
      </a>
      <a href="" className="rounded-full invert-dark bg-green-500 p-3">
        <BsEnvelope className="font-semibold hover:text-scheme-green-dark duration-300 transition-colors" />
      </a>
    </div>
  );
};

export default Socials;
