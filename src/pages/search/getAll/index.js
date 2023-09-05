import React from "react";
import { GetAll, Headers } from "@/exports";


const index = ({ data }) => {
  return (
    <section className="min-h-screen">
      <Headers />
      <GetAll data={data} />
    </section>
  );
};

export default index;

// export async function getStaticPaths() {
//   const {results} = await import("../../../constants/nftsResults.json");
//   console.log(results);
//   const allPaths = results.map((path) => {
//     return {
//       params: {
//         cat: path.id.toString(),
//       },
//     };
//   });
//   return {
//     paths: allPaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(){

//     // const id = context?.params.cat
//     // console.log(id);
//     const {chain} = await import("../../../constants/nftsResults.json");
//     const data = chain
//     console.log(data);
//       return {
//         props: { data, }
//       }
//     }
