import React, { useState } from "react";
import { nftGirlFull } from "@/exports/image-exports";
import { CurrentOwners, TransactionHistory } from "@/exports";
import Image from "next/image";
import Link from "next/link";
import { BsFileArrowDown } from "react-icons/bs";

const SingleNFT = ({ data }) => {
  const [showCurrentOwners, setShowCurrentOWners] = useState(false);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);

  const showDropDown = () => {
    setShowCurrentOWners(prev => !prev)
  }

  const showTransactions = () => {
    setShowTransactionHistory(prev => !prev)
  }

  const date = data.map((data) => (
    data.minted_at
  ))
  const newDate = new Date(date.toString()).toDateString()
  return (
    <div className="min-h-screen">
      <div className="mt-10 h-full">
        {data.map((data, index) => (
          <div className=" flex flex-col justify-center gap-2 p-3" key={index}>
            <div className="flex flex-col rounded-xl lg:h-72 lg:w-[60%] self-center">
              <Image
                src={nftGirlFull}
                alt="nft-image"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="sm:w-[80%] md:w-[80%] lg:w-[60%] self-center h-24 sm:h-28 md:h-32 lg:h-32 bg-black rounded-full invert-dark flex gap-4 items-center justify-center px-8 py-4 sm:p-5 md:p-5 lg:p-4">
              <div className="invert-dark flex flex-col items-center border-white border-r-2  p-3">
                <p className="invert-dark-text text-white font-semibold">
                  {data.total_current_owners}
                </p>
                <p className="invert-dark-text text-white text-lg font-bold uppercase">
                  Owners
                </p>
              </div>
              <div className="flex invert-dark flex-col items-center border-white p-3 text-center">
                <p className="invert-dark-text text-center text-white font-semibold uppercase">
                  {data.token_type}
                </p>
                <p className="invert-dark-text text-white text-lg font-bold uppercase">
                  Token Type
                </p>
              </div>
              <div className="flex invert-dark flex-col items-center border-white p-3 border-l-2">
                <p className="invert-dark-text text-white font-semibold">
                  {data.total_transfers}
                </p>
                <p className="invert-dark-text text-white uppercase font-bold text-lg">
                  Transfers
                </p>
              </div>
            </div>
            <div className="h-[50%] flex flex-col p-5 gap-3">
              <p className="text-2xl font-semibold uppercase">
                {data.token_name === null
                  ? "Token Name Unavailable"
                  : data.token_name}
              </p>
              <p className={` text-lg`}>
                {data.token_description === null
                  ? "Token description unavailable"
                  : data.token_description}
              </p>
              <p className="font-semibold">
                Contract Address:{" "}
                <span className="font-medium">{data.contract_address}</span>
              </p>
              <p className="font-semibold">
                Minted At: <span className="font-medium">{data.minted_at ? newDate : 'Mint Date Not Provided'}</span>
              </p>
              <p className="font-semibold">Created By: <span className="font-medium">{data.metadata !== null || undefined ? `${data.metadata.created_by ? data.metadata.created_by : 'Not Specified'}` : 'Not Specified'}</span></p>
            </div>

            <button className="flex items-center gap-1 justify-start ml-5 cursor-pointer hover:text-scheme-red font-semibold duration-300 transition-colors" onClick={showDropDown}>
              Current Owners
              <BsFileArrowDown className="cursor-pointer" />
            </button>
            {showCurrentOwners ? <CurrentOwners data={data.current_owners} /> : (<></>) }

            <button className="flex gap-1 items-center font-semibold justify-start ml-5 hover:text-scheme-red duration-300 transition-colors" onClick={showTransactions}>Transaction History <BsFileArrowDown className="cursor-pointer" /></button>

            {showTransactionHistory ? <TransactionHistory data={data.recent_price} /> : (<></>) }
            
            <div className="w-[80%] self-center h-20 sm:h-28 md:h-32 lg:h-32 bg-black rounded-full invert-white p-2 flex gap-2 sm:gap-20 md:gap-24 lg:gap-60 items-center">
              <div className="w-[15%] h-[80%] rounded-full bg-white invert-dark"></div>
              <div className="">
                <p className="text-white invert-dark-text font-semibold text-lg sm:text-xl self-center">
                  {data.recent_price
                    ? `${data.recent_price.price !== null ? data.recent_price.price : 'Price Currently Unavailable' }${data.recent_price.price_currency !== null ? data.recent_price.price_currency : '' }`
                    : "Price Currently Unavailable"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleNFT;
