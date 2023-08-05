import React from 'react'
import { Footer, Navbar } from '@/exports'


const SharedLayout = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default SharedLayout