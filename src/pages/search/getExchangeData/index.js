import React from 'react'
import { GetExchangeData, Headers } from '@/exports'

const index = () => {
  return (
    <section className='min-h-screen'>
      <Headers />
        <GetExchangeData />
    </section>
  )
}

export default index