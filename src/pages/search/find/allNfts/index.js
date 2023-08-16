import React from 'react'
import { AllNftFind } from '@/exports'
import { findAllNFTs } from '@/utils/find/findAPI'

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

// export async function getStaticProps() {
//   try {
//     const nfts = await findAllNFTs();
      // const data = nfts.map((data) => data)
      //   const { chain } = nfts;
//     return {
//       props: { data, id: chain },
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
