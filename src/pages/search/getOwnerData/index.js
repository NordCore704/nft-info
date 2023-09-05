import React from 'react'
import { GetOwnerData, Headers } from '@/exports'

const index = () => {
  return (
    <section className='min-h-screen'>
      <Headers />
      <GetOwnerData />
    </section>
  )
}

export default index