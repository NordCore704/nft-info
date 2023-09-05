import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { apiHeaderState } from "@/context/apiHeaderContext";
import { validateFormInputsThree } from "@/utils/validateFormInput/validateFormInput";

const FindNfts = () => {
  const collectionInputRef = useRef();
  const router = useRouter();
  const { findHeaders, setFindHeaders } = apiHeaderState();

  const [errors, setErrors] = useState({});
  
  const handleFormInputs = (e) => {
    const { name, value } = e.target;
    
    const newValue =
      name === "page_size" && value !== "" ? parseInt(value) : value;
    setFindHeaders((prev) => ({ ...prev, [name]: newValue }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormInputsThree(findHeaders);
    if (Object.keys(validationErrors).length === 0) {
      router.push("/search/getOwnerData/allNftOwners");
      return;
    } else {
      setErrors(validationErrors);
    }
  };

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
              errors.q ? "red-border" : ""
            }`}
            onChange={handleFormInputs}
            required
            ref={collectionInputRef}
          />
          <p className="text-sm transition-opacity duration-300 invert-dark text-red-500">
            {errors.q}
          </p>
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

        <div className="flex flex-col">
          <label htmlFor="page_size" className="font-semibold invert-dark">
            Result Size{" "}
            <span className=" font-medium">(values between 1-100)</span>
          </label>
          <input
            type="text"
            name="page_size"
            id="page_size"
            value={findHeaders.page_size}
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
