import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ApiHeaderState } from "@/context/ApiHeaderContext";
import { validateFormInputsTwo } from "@/utils/validateFormInput/validateFormInput";
import GetAllAPI from "@/utils/getAll/GetAllAPI";

const GetAll = ({}) => {
  const { headers, setHeaders, setFetchedData, fetchedData } = ApiHeaderState();
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleFormInputs = (e) => {
    const { name, value } = e.target;
    const newValue =
      name === "page_size" && value !== "" ? parseInt(value) : value;
    setHeaders((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateFormInputsTwo(headers);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const nfts = await GetAllAPI(headers);
        const { results } = nfts;
        const data = results.map((data) => data);

        const { chain } = nfts;
        console.log(results);
        console.log(nfts);
        console.log(data);
        const response = { data, id: chain };
        console.log(response);
        setFetchedData(response);
        console.log(fetchedData);
        console.log(response.data);
        router.push({
          pathname: "/search/getAll/allNFTs",
          query: { data: JSON.stringify(response.data), id: response.id },
        });
      } catch (error) {
        console.log(error, "Fetching Failed");
      }
      return;
    } else {
      setErrors(validationErrors);
    }
  };

  const handleRefresh = (e) => {
    e.preventDefault();
  };
  const sendToResultsPage = (data, id) => {
    router.push({ pathname: "/search/getAll/allNFTs", query: { data, id } });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-5 min-h-screen mb-14">
      <p className="text-center text-4xl mt-5 font-semibold ">
        Please Select Your Search Parameters below:
      </p>
      <form
        action=""
        className="w-[70%] flex flex-col gap-3"
        onSubmit={handleRefresh}
      >
        <label htmlFor="chain" className="font-semibold invert-dark">
          Select A Blockchain
        </label>
        <select
          name="chain"
          id="chain"
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          required
          value={headers.chain}
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
          value={headers.token_type}
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={handleFormInputs}
        >
          <option value="erc721">erc721</option>
          <option value="erc1155">erc1155</option>
        </select>

        <label htmlFor="current_owners" className="font-semibold invert-dark">
          Current Owners
        </label>
        <select
          name="current_owners"
          id="current_owners"
          value={headers.current_owners}
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={handleFormInputs}
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
          value={headers.current_price}
          className="border border-black rounded-md p-2 mb-2 text-gray-500"
          onChange={handleFormInputs}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <div className="flex flex-col">
          <label htmlFor="page_size" className="font-semibold invert-dark">
            Result Size
            <span className=" font-medium">(values between 1-100)</span>
          </label>
          <input
            type="text"
            name="page_size"
            id="page_size"
            value={headers.page_size}
            onChange={handleFormInputs}
            className={`border border-black rounded-md p-2 mb-2 text-gray-500 bg-transparent ${
              errors.page_size ? "red-border" : ""
            }`}
          />
          <p className="text-sm invert-dark text-red-500">{errors.page_size}</p>
        </div>
      </form>

      <button
        onClick={handleSubmit}
        type="submit"
        className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-green duration-500 transition-colors font-semibold hover:text-white"
      >
        See Results
      </button>
    </div>
  );
};

export default GetAll;
