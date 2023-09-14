import React from "react";
import { SingleNFT, Headers } from "@/exports";
import { useRouter } from "next/router";

const GetAllDynamic = ({}) => {
  const router = useRouter();
  const parsedData = JSON.parse(router.query.filteredData)
  const data = [parsedData]
  return (
    <section className="min-h-screen">
      <Headers />
      <SingleNFT data={data} />
    </section>
  );
};

export default GetAllDynamic;
