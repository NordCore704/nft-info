import React from "react";
import { About } from "@/exports";
import Head from "next/head";

const about = () => {
  // The About section 
  return (
    <section className="">
      <Head>
        <title>NFTInfo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nft.png" />
      </Head>
      <About />
    </section>
  );
};

export default about;