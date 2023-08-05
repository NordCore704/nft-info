import React, { useState } from "react";
import { TransactionTransfers, TransactionCurrency } from "@/exports";
import {
  BsArrow90DegDown,
  BsArrowDown,
  BsArrowDownCircle,
  BsArrowDownCircleFill,
} from "react-icons/bs";

const TransactionHistory = ({ data }) => {
  const [showTransfers, setShowTransfers] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const showTransferDropDown = () => {
    setShowTransfers((prev) => !prev);
  };
  const showCurrencyDropDown = () => {
    setShowCurrency((prev) => !prev);
  };

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
          <button
            className="justify-start font-semibold  flex items-center gap-1 hover:text-scheme-red"
            onClick={showTransferDropDown}
          >
            Transfers(ERC20)
            <BsArrowDownCircleFill className="mt-0.5" />
          </button>
          {showTransfers ? (
            <TransactionTransfers data={data.erc20_transfers} />
          ) : (
            <></>
          )}
          <button
            className="justify-start font-semibold  flex items-center gap-1 hover:text-scheme-red"
            onClick={showCurrencyDropDown}
          >
            Currency Transfer Data
            <BsArrowDownCircleFill className="mt-0.5" />
          </button>
          {showCurrency ? <TransactionCurrency data={data.currency} /> : <></>}
        </>
      ) : (
        <p>Transaction Data Not Available</p>
      )}
    </div>
  );
};

export default TransactionHistory;
