import React from 'react'
import { AllNftFind } from '@/exports'
import { data } from 'autoprefixer'

const index = ({ data }) => {
  return (
    <section className='w-full min-h-screen'>
      <AllNftFind data={data}/>
    </section>
  )
}

export default index


export async function getStaticProps(){
    
  const {results} = await import("../../../../constants/search.json");
  const data = results.map((data) => data)
  const { chain } = await import("../../../../constants/nftsResults.json");
    return {
      props: { data, id: chain }
    }
  }