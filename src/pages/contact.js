import React from 'react'
import { Contact, Headers } from '@/exports'

const contact = () => {
  
  // The Contact page section, this carries a component that carries a few other contact component
  return (
    <section className='min-h-screen flex items-center w-full'>
      <Headers />
      <Contact />
    </section>
  )
}

export default contact