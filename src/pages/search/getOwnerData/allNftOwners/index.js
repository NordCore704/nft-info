import React from "react";
import { OwnerData } from "@/exports";

const index = ({ data, summaryData }) => {

  return (
    <section className="min-h-screen">
      <OwnerData data={data} summaryData={summaryData} />
    </section>
  );
};

export default index;

export async function getStaticProps() {
  const { results } = await import("../../../../constants/getOwnerData.json");
  const data = results.map((data) => data);
  const { contract_address, token_id, chain, total_owners, unique_owners } =
    await import("../../../../constants/getOwnerData.json");

  const summaryData = [
    {
      contract_address,
      token_id,
      chain,
      total_owners,
      unique_owners,
    },
  ];
  return {
    props: { data, summaryData },
  };
}
