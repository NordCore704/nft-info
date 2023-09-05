import React, { useState, useEffect } from "react";
import { apiHeaderState } from "@/context/apiHeaderContext";
import axios from "axios";
import { useRouter } from "next/router";
import { validateFormInputsTwo } from "@/utils/validateFormInput/validateFormInput";

const GetExchangeData = () => {
  const router = useRouter();
  const API_URL = "https://api.blockspan.com/v1/exchanges/collections";
  const [errors, setErrors] = useState({});
  const { getExchangeDataHeaders, setGetExchangeDataHeaders } =
    apiHeaderState();
  const handleFormInputs = (e) => {
    const { name, value } = e.target;

    const newValue =
      name === "page_size" && value !== "" ? parseInt(value) : value;

    setGetExchangeDataHeaders((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormInputsTwo(getExchangeDataHeaders);
    if (Object.keys(validationErrors).length === 0) {
      router.push("/search/getExchangeData/allNFTs");
      return;
    } else {
      setErrors(validationErrors);
    }
  };

  console.log(getExchangeDataHeaders);

  return (
    <div className="flex flex-col gap-8 items-center p-5 justify-center h-screen">
      <p className="text-3xl font-semibold text-center">
        Select Your Search Preferences Below:
      </p>
      <form action="" className="flex flex-col gap-4 w-[70%]">
        <label htmlFor="chain" className="font-semibold invert-dark">
          Select A Blockchain
        </label>
        <select
          name="chain"
          id="chain"
          value={getExchangeDataHeaders.chain}
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          required
          onChange={handleFormInputs}
        >
          <option value="eth-main">eth-main</option>
          <option value="arbitrum-main">arbitrum-main</option>
          <option value="optimism-main">optimism-main</option>
          <option value="poly-main">poly-main</option>
          <option value="bsc-main">bsc-main</option>
          <option value="eth-goerli">eth-goerli</option>
        </select>

        <label htmlFor="exchange" className="font-semibold invert-dark">
          Exchange
        </label>
        <select
          name="exchange"
          id="exchange"
          value={getExchangeDataHeaders.exchange}
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={handleFormInputs}
        >
          <option value="opensea">opensea</option>
          <option value="looksrare" className="">
            looksrare
          </option>
        </select>

        <div className="flex flex-col">
          <label htmlFor="page_size" className="font-semibold invert-dark">
            Result Size{" "}
            <span className=" font-medium">(values between 1-100)</span>
          </label>
          <input
            type="text"
            name="page_size"
            id="page_size"
            value={getExchangeDataHeaders.page_size}
            onChange={handleFormInputs}
            className={`border border-black rounded-md p-2 text-gray-500 bg-transparent ${
              errors.page_size ? "red-border" : ""
            }`}
          />
          <p className="text-sm invert-dark text-red-500">{errors.page_size}</p>
        </div>
      </form>

      <button
        type="submit"
        onClick={handleSubmit}
        className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
      >
        See Results
      </button>
    </div>
  );
};

export default GetExchangeData;
