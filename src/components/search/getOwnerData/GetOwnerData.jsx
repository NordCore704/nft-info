import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { apiHeaderState } from "@/context/apiHeaderContext";

const GetOwnerData = () => {
  const contractInputRef = useRef();
  const tokenInputRef = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const contractInputValue = contractInputRef.current.value;
    const tokenInputRefValue = tokenInputRef.current.value;
    if (contractInputValue === "" || tokenInputRefValue === "") {
      setMessage("Valid Input Not Provided Here");
      return;
    }
    router.push("/search/getOwnerData/allNftOwners");
  };

  const { getOwnerDataHeaders, setGetOwnerDataHeaders } = apiHeaderState();

  const changeChain = (e) => {
    const value = e.target.value;
    setGetOwnerDataHeaders((prev) => ({ ...prev, chain: value }));
  };

  const handleContractAddress = (e) => {
    const value = e.target.value;
    setGetOwnerDataHeaders((prev) => ({ ...prev, contract_address: value }));
  };

  const handleTokenId = (e) => {
    const value = e.target.value;
    setGetOwnerDataHeaders((prev) => ({ ...prev, token_id: value }));
  };

  const changeResultSize = (e) => {
    const value = e.target.value;
    setGetOwnerDataHeaders((prev) => ({ ...prev, page_size: value }));
  };

  return (
    <div className="flex flex-col gap-8 items-center p-5 justify-center h-full w-full">
      <p className="text-3xl font-semibold text-center">
        Select Your Search Preferences Below:
      </p>
      <form action="" className="flex flex-col gap-4 w-[70%]">
        <div className="flex flex-col">
          <label htmlFor="contract_address" className="font-semibold mb-2 invert-dark">
            Contract Address
          </label>
          <input
            type="text"
            name="contract_address"
            id="contract_address"
            ref={contractInputRef}
            onChange={(e) => handleContractAddress(e)}
            className={`border border-black rounded-md p-2 mb-2 text-gray-500 bg-transparent ${
              message !== "" ? "red-border" : ""
            }`}
          />
          <p className="text-sm invert-dark">{message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="token_id" className="font-semibold mb-2 invert-dark">
            Token ID{" "}
            <span className="font-medium">(as specified in the contract)</span>
          </label>
          <input
            type="text"
            ref={tokenInputRef}
            onChange={(e) => handleTokenId(e)}
            name="contract_address"
            id="contract_address"
            className={`border border-black rounded-md p-2 mb-2 text-gray-500 bg-transparent ${
              message !== "" ? "red-border" : ""
            }`}
          />
          <p className="text-sm invert-dark">{message}</p>
        </div>

        <label htmlFor="chain" className="font-semibold invert-dark">
          Select A Blockchain
        </label>
        <select
          name="chain"
          id="chain"
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          required
          onChange={(e) => changeChain(e)}
        >
          <option value="eth-main">eth-main</option>
          <option value="arbitrum-main">arbitrum-main</option>
          <option value="optimism-main">optimism-main</option>
          <option value="poly-main">poly-main</option>
          <option value="eth-goerli">eth-goerli</option>
        </select>

        <label htmlFor="page_size" className="font-semibold invert-dark">
          Result Size(1-100)
        </label>
        <select
          name="page_size"
          id="page_size"
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={(e) => changeResultSize(e)}
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
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

export default GetOwnerData;
