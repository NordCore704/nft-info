import React from 'react'
import { AllExchangeNFT } from '@/exports'

const index = ({ data }) => {
  return (
    <section className=''>
        <AllExchangeNFT data={data}/>
    </section>
  )
}

export default index

export async function getStaticProps(){
    
    const {results} = await import("../../../../constants/exchangeOpenSea.json");
    const data = results.map((data) => data)
    const { chain } = await import("../../../../constants/exchangeOpenSea.json");
      return {
        props: { data, id: chain }
      }
    }