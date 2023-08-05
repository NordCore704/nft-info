import React from "react";
import Link from "next/link";
import { apiHeaderState } from "@/context/apiHeaderContext";

const GetAll = ({ }) => {

  const {
    headers, setHeaders,
  } = apiHeaderState()
  const changeChain = (e) => {
      const value = e.target.value
      setHeaders(prev => ({...prev, chain: value}))
  }
  const changeToken = (e) => {
      const value = e.target.value
      setHeaders(prev => ({...prev, token_type: value}))
  }
  const changeOwnersFilter = (e) => {
      const value = e.target.value
      setHeaders(prev => ({...prev, current_owners: value}))
  }
  const changeCurrentPriceFilter = (e) => {
      const value = e.target.value
      setHeaders(prev => ({...prev, current_price: value}))
  }
  
  const changeResultSize = (e) => {
      const value = e.target.value
      setHeaders(prev => ({...prev, result_size: value}))
  }
  
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-5">
      <p className="text-center text-4xl mt-5 font-semibold ">
        Please Select Your Search Parameters below:
      </p>
      <form action="" className="w-[70%] flex flex-col gap-3">
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

        <label htmlFor="token_type" className="font-semibold invert-dark">
          Token Type
        </label>
        <select
          name="token_type"
          id="token_type"
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={(e) => changeToken(e)}
        >
          <option value=""></option>
          <option value="erc721">erc721</option>
          <option value="erc1155">erc1155</option>
        </select>

        <label htmlFor="current_owners" className="font-semibold invert-dark">
          Current Owners
        </label>
        <select
          name="current_owners"
          id="current_owners"
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={(e) => changeOwnersFilter(e)}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <label htmlFor="current_price" className="font-semibold invert-dark">
          Current Price
        </label>
        <select
          name="current_price"
          id="current_price"
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={(e) => changeCurrentPriceFilter(e)}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <label htmlFor="result_size" className="font-semibold invert-dark">
          Result Size(1-100)
        </label>
        <select
          name="result_size"
          id="result_size"
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={(e) => changeResultSize(e)}
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </form>

      <Link
        href={`/search/getAll/allNFTs`}
        className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
      >
        See Results
      </Link>
    </div>
  );
};

export default GetAll;
