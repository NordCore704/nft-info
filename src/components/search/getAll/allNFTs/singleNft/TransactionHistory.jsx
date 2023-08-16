import React, { useState } from "react";
import { TransactionTransfers, TransactionCurrency } from "@/exports";
import {
  BsArrow90DegDown,
  BsArrowDown,
  BsArrowDownCircle,
  BsArrowDownCircleFill,
} from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

const TransactionHistory = ({ data }) => {


  let date = "";

  if (data !== null) {
    date = new Date(data.date.toString()).toDateString();
  } else {
    date = "";
  }

  return (
    <div className="gap-3 bg-gray-400 justify-start ml-5 rounded-md p-3 flex flex-col">
      {data !== null ? (
        <>
          <p className="font-semibold">
            Contract Address:{" "}
            <span className="font-medium">{data.contract_address}</span>
          </p>
          <p className="font-semibold">
            Hash Count:{" "}
            <span className="font-medium">{data.hash_nft_count}</span>
          </p>
          {/* <p className="font-semibold">Hash: <span className="font-medium text-[12px]">{data.hash}</span></p> */}
          <p className="font-semibold">
            From: <span className="font-medium">{data.from_address}</span>
          </p>
          <p className="font-semibold">
            To: <span className="font-medium">{data.to_address}</span>
          </p>
          <p className="font-semibold">
            Date: <span className="font-medium">{date}</span>
          </p>
          <p className="font-semibold">
            Quantity: <span className="font-medium">{data.quantity}</span>
          </p>
          <p className="font-semibold">
            Price:{" "}
            <span className="font-medium">
              {data.price !== null
                ? `${data.price}${data.price_currency}`
                : "Price Not Specified"}
            </span>
          </p>
          <p className="font-semibold">
            Price In USD:{" "}
            <span className="font-medium">
              {data.price_usd !== null
                ? `$${data.price_usd}`
                : "USD Price Not Specified"}
            </span>
          </p>
          <p className="font-semibold">
            Native Price:{" "}
            <span className="font-medium">
              {data.price_native !== null
                ? `${data.price_native}`
                : "Native Price Not Specified"}
            </span>
          </p>
     
            <details className="group w-full justify-start flex items-center gap-1 ">
              <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer hover:text-scheme-red font-semibold w-full">Transfers(ERC20)<MdArrowDropDown className="mt-0.5"/></summary>
              <article className="">
                <TransactionTransfers data={data.erc20_transfers} />
              </article>
            </details>
            <details className="group w-full justify-start flex items-center gap-1 ">
              <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer hover:text-scheme-red font-semibold w-full">Currency Transfer Data<MdArrowDropDown className="mt-0.5"/></summary>
              <article className="">
              <TransactionCurrency data={data.currency} /> 
              </article>
            </details>
         

        </>
      ) : (
        <p>Transaction Data Not Available</p>
      )}
    </div>
  );
};

export default TransactionHistory;
