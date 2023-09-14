import React from "react";
import { SingleNFT, Headers } from "@/exports";
import { useRouter } from "next/router";
import { apiHeaderState } from "@/context/ApiHeaderContext";

const GetAllDynamic = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const data = id
  return (
    <section className="min-h-screen">
      <Headers />
      <SingleNFT data={data} />
    </section>
  );
};

export default GetAllDynamic;

// export async function getStaticPaths() {
//   const {results} = await import("../../../../../constants/nftsResults.json");
//   const allPaths = results.map((path) => {
//     return {
//       params: {
//         id: path.id,
//       },
//     };
//   });

//   return {
//     paths: allPaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context){

//   const path = context?.params.id
//   const {results} = await import("../../../../../constants/nftsResults.json");
//   const data = results.filter((data) => path === data.id)
//     return {
//       props: { data }
//     }
//   }

// export async function getStaticProps({ params }) {
//   const { id } = params;
//   const { fetchedData } = apiHeaderState();

//   const data = fetchedData.find((item) => item.id === id.id);

//   return {
//     props: {
//       data
//     }
//   }
// }
