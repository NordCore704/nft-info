import React from "react";
import { SingleExchangeNFT, Headers } from "@/exports";
import { useRouter } from "next/router";

const DisplaySingleNFT = () => {
  const router = useRouter();
  const parsedData = JSON.parse(router.query.filteredData)
  const data = [parsedData]
  return (
    <section className="min-h-screen">
      <Headers />
      <SingleExchangeNFT data={data} />
    </section>
  )
};

export default DisplaySingleNFT;

// export async function getStaticPaths() {
//   const { results } = await import(
//     "../../../../../constants/exchangeOpenSea.json"
//   );
//   const allPaths = results.map((path) => {
//     return {
//       params: {
//         id: path.key,
//       },
//     };
//   });

//   return {
//     paths: allPaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const path = context?.params.id;
//   const { results } = await import(
//     "../../../../../constants/exchangeOpenSea.json"
//   );
//   const data = results.filter((data) => path === data.key);
//   return {
//     props: { data },
//   };
// }
