import { nftPortrait, retroNftFull, vrNft } from "@/exports/image-exports";
import { CategoriesSearch } from "@/exports";
import React from "react";
import Image from "next/image";

const OverlayBg = () => {
  return (
    <section className="flex flex-col items-center justify-center p-5">
      {/* <video src="/nft-video.mp4" className='w-full h-full object-cover rounded-md absolute top-0 left-0 -z-10' autoPlay loop mute></video> */}
      <hr className="w-full mb-4 h-0.5 bg-gray-500" />
      <CategoriesSearch />
      <hr className="w-full mt-4 h-0.5 bg-gray-500" />
      <div className="flex flex-col gap-5 items-center justify-center p-5 md:flex-row lg:flex-row">
        <div className="flex gap-3">
          <Image
            alt="avatar"
            src={retroNftFull}
            className="w-10 h-10 rounded-full object-cover"
          />
          <article className="bg-gradient-to-b from-green-500 p-3 rounded-md border">
            <p className="capitalize text-2xl font-semibold">
              A retro NFT or so?
            </p>
            <p>
              Are you a fan of retro NFTs or something like that? well you could
              get the one you so desire, with a customised search through our
              vast database of NFTs.
            </p>
          </article>
        </div>
        <div className="flex gap-3">
          <Image src={vrNft} alt="avatar" className="w-10 h-10 rounded-full" />
          <article className="bg-gradient-to-b from-green-500 p-3 rounded-md border">
            <p className="capitalize text-2xl font-semibold">The Cartoon Guy</p>
            <p className="">
              You may probably prefer NFTs with a cartoon-like nature, sure we
              could do you that too. You just have to set your preference in
              your every search.
            </p>
          </article>
        </div>
        <div className="flex gap-3">
          <Image
            alt="avatar"
            src={nftPortrait}
            className="w-10 h-10 rounded-full"
          />
          <article className="bg-gradient-to-b from-green-500 p-3 rounded-md border">
            <p className="capitalize text-2xl font-semibold">
              Oh, you want a Portrait
            </p>
            <p>
              A collector of portraits and real artwork? It really doesn't have
              to be just a photo, if it's a portrait and also an NFT that
              exists, we will let you know.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OverlayBg;
