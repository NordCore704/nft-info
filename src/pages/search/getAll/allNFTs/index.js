import React from 'react'
import { AllNfts } from '@/exports'
import { apiHeaderState } from '@/context/apiHeaderContext'

const index = ({data, id}) => {
  return (
    <div>
      <AllNfts data={data} chain={id}/>
    </div>
  )
}

export default index


// // export async function getStaticProps() {
// const { headers, setHeaders } = apiHeaderState()
// //   const response = await fetch("https://fakestoreapi.com/products/categories" + new URLSearchParams({
// ...headers
// }), {
// headers: {
  // X-API-KEY : 'q72R8FaDM0YEDQ0ZVWGAbNxwfXecUbjJ'
// }
// })
// //   const data = await response.json();

// //   return {
// //     props: { data: data },
// //   };
// // }

export async function getStaticProps(){
    
    const {results} = await import("../../../../constants/nftsResults.json");
    const data = results.map((data) => data)
    const { chain } = await import("../../../../constants/nftsResults.json");
      return {
        props: { data, id: chain }
      }
    }