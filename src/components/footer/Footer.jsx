import React from "react";
import { Logo, Links, Socials } from "@/exports";
import {
  Inter,
  Bebas_Neue,
  Alata,
  Archivo_Black,
  Archivo,
  Raleway,
  Ubuntu,
  Montserrat,
} from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["700"] });
const raleway = Raleway({ subsets: ["latin"], weight: "700" });

const Footer = () => {
  return (
    <footer className="h-[80%] bg-scheme-dark invert-dark flex justify-between sm:justify-between md:justify-between lg:justify-between flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-6 p-4">
      <Logo montserrat={montserrat}/>
      <Links montserrat={montserrat}/>
      <Socials />
    </footer>
  );
};

export default Footer;
