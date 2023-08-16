import React from "react";
import { AllNfts } from "@/exports";
import { apiHeaderState } from "@/context/apiHeaderContext";
import { getAllNFTs } from "@/utils/getAll/getAllAPI";

const index = ({ data, id }) => {
  return (
    <div>
      <AllNfts data={data} chain={id} />
    </div>
  );
};

export default index;

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

// export async function getStaticProps() {
//   try {
//     const nfts = await getAllNFTs();
//     return {
//       props: { nfts },
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
