import React from 'react'
import { AllExchangeNFT } from '@/exports'
import { getAllExchangeCollections } from '@/utils/getAllExchange/getAllExchangeAPI'

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


    // export async function getStaticProps() {
//   try {
//     const nfts = await getAllNFTs();
    // const { results } = nfts
      // const data = results.map((data) => data)
      //  const { chain } = nfts;
//     return {
//       props: { data, id: chain, },
//       revalidate: 3600, // Revalidate every one hour, read more about revalidation in the official nextjs docs
//     };
//   } catch (error) {
//     return {
//       props: {
//         nfts: [],
//       },
//       revalidate: 3600
//     };
//   }
// }
