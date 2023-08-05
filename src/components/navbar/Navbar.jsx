import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { logo, hamburger, closeburger } from "@/exports/image-exports";
import MobileNavbar from "./MobileNavbar";
import gsap, { Power3 } from "gsap";
import { Inter, Poppins, Archivo, Alatsi, Alata } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
    subsets: ['latin']
})
const alatsi = Alatsi({
    subsets: ['latin'],
    weight: '400',
})

const alata = Alata({
    subsets: ['latin'],
    weight: "400",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  const router = useRouter();
  const currentRoute = router.pathname;

  const navRef = useRef();
  const logoRef = useRef();
  const listRefOne = useRef();
  const listRefTwo = useRef();
  const listRefThree = useRef();
  const listRefFour = useRef();
  let timeline = gsap.timeline();
  useEffect(() => {
    timeline
      .to(navRef.current, {
        visibility: "visible",
        duration: 0.5,
        ease: "ease-in",
      })
      .to(logoRef.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        duration: 1,
      })
      .to(listRefOne.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.7,
      })
      .to(listRefTwo.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.8,
      })
      .to(listRefThree.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.8,
      })
      .to(listRefFour.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.8,
      });
  });


  useEffect(() => {
    !toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

  }, [toggle]);

  return (
    <header
      className={`header overflow-hidden`}
      ref={navRef}
    >
      <nav className="nav flex justify-between items-center h-12 p-4">
        <div
          className="logo--div py-3 flex justify-center items-center h-[64px] opacity-0 -translate-x-8"
          ref={logoRef}
        >
          <Image src={logo} height={40} alt={"logo"} />
          <p className={`text-xl font-extrabold self-end ${alatsi.className}`}>NftInfo</p>
        </div>
        <div className="details--div flex items-center">
          {toggle ? (
            <Image
              src={hamburger}
              alt="hamburger"
              onClick={toggleNav}
              className="hamburger flex cursor-pointer md:hidden lg:hidden sm:hidden transition-opacity duration-300"
            />
          ) : (
            <Image
              src={closeburger}
              onClick={toggleNav}
              className="hamburger flex cursor-pointer z-40 md:hidden lg:hidden sm:hidden transition-opacity duration-300"
              alt="closeburger"
            />
          )}
          <ul className={`gap-3 hidden list-none lg:flex md:flex sm:flex font-semibold ${alata.className}`}>
            <li className="-translate-x-8 opacity-0" ref={listRefOne}>
              <Link href={"/"} className={currentRoute === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="-translate-x-8 opacity-0" ref={listRefTwo}>
              <Link
                href={"/about"}
                className={currentRoute === "/about" ? "active" : ""}
              >
                {" "}
                About
              </Link>
            </li>
            <li className="-translate-x-8 opacity-0" ref={listRefThree}>
              <Link
                href={"/search"}
                className={currentRoute === "/search" ? "active" : ""}
              >
                Search
              </Link>
            </li>
            <li className="-translate-x-8 opacity-0" ref={listRefFour}>
              <Link
                href={"/contact"}
                className={currentRoute === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      
        {!toggle ? <MobileNavbar alata={alata} setToggle={setToggle} toggle={toggle}/> : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
