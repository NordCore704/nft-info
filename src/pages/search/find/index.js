import React from "react";
import { FindNfts, Headers } from "@/exports";
import Head from "next/head";

const index = () => {
  return (
    <section className="min-h-screen">
      <Headers />
      <FindNfts />
    </section>
  );
};

export default index;
