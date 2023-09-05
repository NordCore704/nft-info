import React from "react";
import { Logo, Links, Socials } from "@/exports";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[80%] bg-scheme-dark invert-dark flex justify-between sm:justify-between md:justify-between lg:justify-between flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-6 p-4">
      <Logo />
      <Links />
      <Socials />
    </footer>
  );
};

export default Footer;
