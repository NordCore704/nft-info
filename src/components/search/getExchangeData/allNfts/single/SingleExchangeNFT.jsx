import React from "react";
import Image from "next/image";
import { retroNftFull } from "@/exports/image-exports";
import {
  SingleStats,
  SingleExchangeUrls,
  SingleExchangeContracts,
} from "@/exports";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";

const SingleExchangeNFT = ({ data }) => {
  return (
    <div className="min-h-screen p-4 overflow-hidden">
      {data ? (
        <>
          <div className="">
            {data.map((data, index) => (
              <div className="w-full flex flex-col gap-3" key={index}>
                <div className="h-[50%] rounded-lg">
                  <Image
                    alt="nftImage"
                    src={retroNftFull}
                    className="h-full rounded-lg"
                  />
                </div>
                <p className="text-3xl font-semibold capitalize">
                  {data.name ? `${data.name}` : "Name Not Availble"}
                </p>
                <p className="text-lg text-gray-500">
                  Exchange:{" "}
                  <span className="text-black font-semibold capitalize invert-dark">
                    {data.exchange}
                  </span>
                </p>
                <div className="flex gap-5 p-2 lg:justify-start justify-center w-full">
                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-sm">Number Of Owners</p>
                    <p className="text-2xl font-semibold">
                      {data.stats.num_owners}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-sm">Total Supply</p>
                    <p className="text-2xl font-semibold">
                      {data.stats.total_supply}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="uppercase font-semibold text-xl">Description</p>
                  <p>{data.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <details className="group w-full justify-start flex items-center gap-1 ">
                      <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer duration-200 transition-colors hover:text-scheme-red font-semibold w-full">
                        Stats <MdArrowDropDown className="mt-0.5" />
                      </summary>
                      <article className="">
                        <SingleStats data={data.stats} />
                      </article>
                    </details>
                  </div>
                  <div className="flex flex-col">
                    <details className="group w-full justify-start flex items-center gap-1 ">
                      <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer duration-200 transition-colors hover:text-scheme-red font-semibold w-full">
                        URLs <MdArrowDropDown className="mt-0.5" />
                      </summary>
                      <article className="">
                        <SingleExchangeUrls data={data} />
                      </article>
                    </details>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <details className="group w-full justify-start flex items-center gap-1 ">
                      <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer duration-200 transition-colors hover:text-scheme-red font-semibold w-full">
                        Contracts <MdArrowDropDown className="mt-0.5" />
                      </summary>
                      <article className="">
                        <SingleExchangeContracts data={data.contracts} />
                      </article>
                    </details>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-3 items-center justify-center h-full">
            <p className="text-5xl font-semibold">Data Could Not Be Found!</p>
            <p>Probably your search Preferences doesn't match our data?😔</p>
            <Link
              href={`/search/getExchangeData`}
              className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
            >
              Go Back
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleExchangeNFT;
