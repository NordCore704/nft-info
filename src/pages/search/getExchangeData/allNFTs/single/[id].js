import React from "react";
import { SingleExchangeNFT } from "@/exports";

const displaySingleNFT = ({ data }) => {
  return (
    <section className="min-h-screen">
      <SingleExchangeNFT data={data} />
    </section>
  )
};

export default displaySingleNFT;

export async function getStaticPaths() {
  const { results } = await import(
    "../../../../../constants/exchangeOpenSea.json"
  );
  const allPaths = results.map((path) => {
    return {
      params: {
        id: path.key,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const path = context?.params.id;
  const { results } = await import(
    "../../../../../constants/exchangeOpenSea.json"
  );
  const data = results.filter((data) => path === data.key);
  return {
    props: { data },
  };
}
