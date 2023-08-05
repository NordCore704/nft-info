import React from "react";
import {
  BsInstagram,
  BsLinkedin,
  BsEnvelope,
  BsTwitter,
} from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex gap-2 lg:gap-4 self-end justify-self-end">
      <a href="">
        <BsInstagram className="font-semibold hover:text-scheme-red duration-300 transition-colors" />
      </a>
      <a href="">
        <BsTwitter className="font-semibold hover:text-scheme-red duration-300 transition-colors" />
      </a>
      <a href="">
        <BsLinkedin className="font-semibold hover:text-scheme-red duration-300 transition-colors" />
      </a>
      <a href="">
        <BsEnvelope className="font-semibold hover:text-scheme-red duration-300 transition-colors" />
      </a>
    </div>
  );
};

export default Socials;
