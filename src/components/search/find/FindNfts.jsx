import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { apiHeaderState } from "@/context/apiHeaderContext";


const FindNfts = () => {
  const collectionInputRef = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {

    const collectionInputValue = collectionInputRef.current.value;
    if (collectionInputValue === "") {
      setMessage("Valid Input Not Provided Here");
      return;
    }
    router.push("/search/find/allNfts");
  };
  const { findHeaders, setFindHeaders } = apiHeaderState();

  const handleFormInputs = (e) => {
    const { name, value } = e.target;
    setFindHeaders((prev) => ({ ...prev, [name]: value }));
  }


  return (
    <div className="flex flex-col gap-8 items-center p-5 justify-center h-screen w-full">
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
          value={findHeaders.chain}
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

        <label htmlFor="token_type" className="font-semibold invert-dark">
          Token Type
        </label>
        <select
          name="token_type"
          id="token_type"
          value={findHeaders.token_type}
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={handleFormInputs}
        >
          <option value=""></option>
          <option value="erc721">erc721</option>
          <option value="erc1155">erc1155</option>
        </select>

        <div className="flex flex-col">
          <label htmlFor="q" className="font-semibold invert-dark">
            Collection Name
          </label>
          <input
            type="text"
            name="q"
            id="q"
            value={findHeaders.q}
            className={`border border-black rounded-md p-2 mb-2 text-gray-500 bg-transparent ${
              message !== "" ? "red-border" : ""
            }`}
            onChange={handleFormInputs}
            required
            ref={collectionInputRef}
          />
          <p className="text-sm transition-opacity duration-300 invert-dark">{message}</p>
        </div>

        <label htmlFor="filter" className="font-semibold invert-dark">
          Filter
        </label>
        <select
          name="filter"
          id="filter"
          value={findHeaders.filter}
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={handleFormInputs}
        >
          <option value="token_name" className="">
            token_name
          </option>
          <option value="token_description">token_description</option>
          <option value="token_attributes">token_attributes</option>
          <option value="all">all</option>
        </select>

        <label htmlFor="page_size" className="font-semibold invert-dark">
          Result Size(1-100)
        </label>
        <select
          name="page_size"
          id="page_size"
          value={findHeaders.result_size}
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={handleFormInputs}
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

      {/* <Link
        type='submit'
        href={`/search/find/allNfts`}
        onSubmit={handleSubmit}
        className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
  
      >
        See Results
      </Link> */}
    </div>
  );
};

export default FindNfts;
