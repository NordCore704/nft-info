import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { ApiHeaderState } from "@/context/apiHeaderContext";
import { validateFormInputs } from "@/utils/validateFormInput/validateFormInput";
import { GetAllOwnersAPI } from '@/utils/getAllOwners/GetAllOwnersAPI'

const GetOwnerData = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const { getOwnerDataHeaders, setGetOwnerDataHeaders } = ApiHeaderState();

  
  const handleFormInputs = (e) => {
    const { name, value } = e.target;

    const newValue =
      name === "page_size" && value !== "" ? parseFloat(value) : value;
    setGetOwnerDataHeaders((prev) => ({ ...prev, [name]: newValue }));
  };

  const API_URL = `https://api.blockspan.com/owners/contract/${getOwnerDataHeaders.contract_address}/token/${parseInt(getOwnerDataHeaders.token_id)}`;

  const sendToResultsPage = (data, summaryData) => {
    router.push({pathname: "/search/getOwnerData/allNftOwners", query: {data, summaryData}});
  }

  const handleSubmit = async (e) => {
    const nextURL = "/search/getOwnerData/allNftOwners"
    const validationErrors = validateFormInputs(getOwnerDataHeaders);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const nfts = await GetAllOwnersAPI(getOwnerDataHeaders, API_URL)
        const { results } = nfts;
        const data = results.map((data) => data);
        const { contract_address, token_id, chain, total_owners, unique_owners } =
        nfts;
        const summaryData = [
          {
            contract_address,
            token_id,
            chain,
            total_owners,
            unique_owners,
          },
        ];
        const response = { data, summaryData,}
        sendToResultsPage(response.data, response.summaryData)
      
      } catch (error) {
        console.log(error, 'Fetching Failed');
      }
      
      return;
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center p-5 justify-center h-screen w-full mb-8">
      <p className="text-3xl font-semibold text-center">
        Select Your Search Preferences Below:
      </p>
      <form action="" className="flex flex-col gap-4 w-[70%]">
        <div className="flex flex-col">
          <label
            htmlFor="contract_address"
            className="font-semibold mb-2 invert-dark"
          >
            Contract Address
          </label>
          <input
            type="text"
            name="contract_address"
            id="contract_address"
            value={getOwnerDataHeaders.contract_address}
            onChange={handleFormInputs}
            className={`border border-black rounded-md p-2 text-gray-500 bg-transparent ${
              errors.contract_address ? "red-border" : ""
            }`}
          />
          <p className="text-sm invert-dark text-red-500">
            {errors.contract_address}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="token_id" className="font-semibold mb-2 invert-dark">
            Token ID{" "}
            <span className="font-medium">(as specified in the contract)</span>
          </label>
          <input
            type="text"
            onChange={handleFormInputs}
            value={getOwnerDataHeaders.token_id}
            name="token_id"
            id="token_id"
            className={`border border-black rounded-md p-2 text-gray-500 bg-transparent ${
              errors.token_id ? "red-border" : ""
            }`}
          />
          <p className="text-sm invert-dark text-red-500">{errors.token_id}</p>
        </div>

        <label htmlFor="chain" className="font-semibold invert-dark">
          Select A Blockchain
        </label>
        <select
          name="chain"
          id="chain"
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          required
          value={getOwnerDataHeaders.chain}
          onChange={handleFormInputs}
        >
          <option value="eth-main">eth-main</option>
          <option value="arbitrum-main">arbitrum-main</option>
          <option value="optimism-main">optimism-main</option>
          <option value="poly-main">poly-main</option>
          <option value="bsc-main">bsc-main</option>
          <option value="eth-goerli">eth-goerli</option>
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
            value={getOwnerDataHeaders.page_size}
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
        onClick={(e) => handleSubmit(e)}
        className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-green duration-500 transition-colors font-semibold hover:text-white"
      >
        See Results
      </button>
    </div>
  );
};

export default GetOwnerData;
