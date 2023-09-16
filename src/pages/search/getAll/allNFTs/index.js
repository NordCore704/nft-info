import React, { useEffect } from "react";
import { AllNfts, Headers } from "@/exports";
import { apiHeaderState } from "@/context/apiHeaderContext";
import GetAllAPI from "@/utils/getAll/getAllAPI";


const index = ({}) => {
 

  return (
    <div>
      <Headers />
      <AllNfts />
    </div>
  );
};

export default index;

// export async function getStaticProps() {
// const { headers, setHeaders } = apiHeaderState()
//   const response = await fetch("https://api.blockspan.com/v1/nfts" + new URLSearchParams({
//     chain: headers.chain,
//     token_type: headers.token_type,
//     include_current_owners: `${headers.current_owners}`,
//     include_current_price: `${headers.current_price}`,
//     page_size: parseInt(headers.page_size),
// }), {
// headers: {
// "X-API-KEY" : 'q72R8FaDM0YEDQ0ZVWGAbNxwfXecUbjJ',
// }
// })
//   const data = await response.json();

//   return {
//     props: { data: data },
//   };
// }

// export async function getStaticProps(){

//     const {results} = await import("../../../../constants/nftsResults.json");
//     const data = results.map((data) => data)
//     const { chain } = await import("../../../../constants/nftsResults.json");
//       return {
//         props: { data, id: chain }
//       }
//     }

// export async function getStaticProps() {
//   try {
//     const nfts = await GetAllAPI();
//     const { results } = nfts;
//     const data = results.map((data) => data);
//     const { chain } = nfts;
//     console.log(nfts);
//     return {
//       props: { data, id: chain },
//       revalidate: 3600, // Revalidate every one hour, read more about revalidation in the official nextjs docs
//     };
//   } catch (error) {
//     return {
//       props: {
//         nfts: [],
//       },
//       revalidate: 3600,
//     };
//   }
// }
