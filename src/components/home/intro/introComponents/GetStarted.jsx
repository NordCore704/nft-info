import Link from 'next/link'
import React, {useRef, useEffect} from 'react'
import { BsStars } from 'react-icons/bs'
import { Power3 } from 'gsap'

const GetStarted = ({timeline}) => {
    const mainRef = useRef()
    const textRef = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        timeline.to(mainRef.current, {
            opacity: 1,
            duration: 1,
            duration: .5,
            transition: Power3.easeInOut,
            ease: 'ease-in',
        }).to(textRef.current, {
            y: 0,
            transition: Power3.easeInOut,
            ease: 'ease-in',
            duration: 1,
            opacity: 1,
        }).to(buttonRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            transition: Power3.easeInOut,
            ease: 'ease-in',
        })
    })
  return (
    <div className="flex flex-col gap-3 items-center justify-center opacity-0" ref={mainRef}>
        <BsStars className="text-4xl text-green-500"/>
    <p className={`mb-3 opacity-0 -translate-y-10 text-center`} ref={textRef}>
      Get information about NFTs from the world's top artists
    </p>
    <Link
      href={"/search"}
      className={`text-center px-5 py-3 hover:bg-scheme-green hover:text-white rounded-lg capitalize font-semibold bg-green-500 transition-colors duration-300 opacity-0 -translate-y-10`} ref={buttonRef}
    >
      Get Started
    </Link>
  </div>
  )
}

export default GetStarted