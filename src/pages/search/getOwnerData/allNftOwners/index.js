import React from "react";
import { OwnerData, Headers } from "@/exports";
import { useRouter } from "next/router";

const index = ({}) => {
  const router = useRouter()
  const { data, summaryData } = router.query
  return (
    <section className="min-h-screen">
      <Headers />
      <OwnerData data={JSON.parse(data)} summaryData={summaryData} />
    </section>
  );
};

export default index;

// export async function getStaticProps() {
//   const { results } = await import("../../../../constants/getOwnerData.json");
//   const data = results.map((data) => data);
//   const { contract_address, token_id, chain, total_owners, unique_owners } =
//     await import("../../../../constants/getOwnerData.json");

//   const summaryData = [
//     {
//       contract_address,
//       token_id,
//       chain,
//       total_owners,
//       unique_owners,
//     },
//   ];
//   return {
//     props: { data, summaryData },
//   };
// }

// export async function getStaticProps() {
//   try {
//     const nfts = await GetAllOwners();
//     const { results } = nfts;
//     const data = results.map((data) => data);
//     const { contract_address, token_id, chain, total_owners, unique_owners } =
//       nfts;
//     const summaryData = [
//       {
//         contract_address,
//         token_id,
//         chain,
//         total_owners,
//         unique_owners,
//       },
//     ];
//     console.log(data);
//     return {
//       props: { data, summaryData },
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
