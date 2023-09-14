import React from 'react'
import { AllExchangeNFT, Headers } from '@/exports'
import { useRouter } from "next/router";

const Index = ({}) => {
  const router = useRouter()
  const { data, id } = router.query

  return (
    <section className=''>
        <Headers />
        <AllExchangeNFT data={JSON.parse(data)}/>
    </section>
  )
}

export default Index

// export async function getStaticProps(){
    
//     const {results} = await import("../../../../constants/exchangeOpenSea.json");
//     const data = results.map((data) => data)
//     const { chain } = await import("../../../../constants/exchangeOpenSea.json");
//       return {
//         props: { data, id: chain }
//       }
//     }


// export async function getStaticProps() {
//   try {
//     const nfts = await GetAllExchangeAPI();
//     const { results } = nfts
//       const data = results.map((data) => data)
//        const { chain } = nfts;
//        console.log(nfts);
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