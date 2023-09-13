import React from "react";
import Head from "next/head";

const Headers = () => {
  const seoConstants = {
    name: "NFTInfo",
    title: "Get Data On NFTs",
    description:
      "NFTInfo | NFT Information is a platform for search on NFTs from the blockspan API, get real time data on the go!😀",
  };
  return (
    <Head>
      <title>NFTInfo</title>
      <meta name="description" content={seoConstants.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/nft-blue.png" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoConstants.title} />
      <meta property="og:image" content="/nft-blue.png" />
      <link rel="cannonical" href="https://simon-peter-liard.vercel.app" />
      <meta property="og:description" content={seoConstants.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://simon-peter-liard.vercel.app" />

      {/* Twitter  */}
      <meta property="twitter:creator" content={seoConstants.name} />
      <meta property="twitter:card" content="website" />
      <meta property="twitter:type" content="website" />
      <meta property="twitter:title" content={seoConstants.title} />
      <meta
        property="twitter:url"
        content="https://simon-peter-liard.vercel.app"
      />
      <meta property="twitter:image" content="/nft-blue.png" />
      <meta property="twitter:description" content={seoConstants.description} />
    </Head>
  );
};

export default Headers;
