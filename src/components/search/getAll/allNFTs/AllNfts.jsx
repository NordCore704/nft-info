import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { nftGirl } from "@/exports/image-exports";
import { useRouter } from "next/router";


const AllNfts = ({ }) => {
  const router = useRouter()
  const { data, id } = router.query

  const parsedData = JSON.parse(data)

  const [currentPage, setCurrentPage] = useState(1);
  const nftsPerPage = 5;
  const lastIndex = currentPage * nftsPerPage;
  const firstIndex = lastIndex - nftsPerPage;
  const nfts = parsedData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(parsedData.length / nftsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRouteChange = (e) => {
    
    router.push({ pathname: `/search/getAll/allNFTs/singleNFT/${e}`, query: {data: e}})
  }

  return (
    <div className="p-4">
      <p className="text-center text-4xl font-medium capitalize mb-8">
        {chain}
      </p>
      <div className="paginator flex flex-col gap-4">
        {nfts.map((data, index) => (
          <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 20}}
          transition={{delay: 0.2 * index}}
            className="p-3 rounded-md bg-gray-400 flex flex-col gap-1"
            key={index}
          >
            <div className=" flex gap-2 items-center">
              <Image
                src={data.cached_images !== null ? data.cached_images: nftGirl}
                className="rounded-full border w-10 h-10 object-cover border-black"
                alt="image"
              />
              <p className={`font-semibold text-lg `}>
                {data.token_name === null
                  ? "Token Name Unavailable"
                  : data.token_name}
              </p>
            </div>

            <p className={``}>
              Token Type:{" "}
              <span className="text-scheme-purple uppercase font-semibold">
                {data.token_type}
              </span>
            </p>

            <div className="self-end flex gap-2 items-center">
              <p className="text-scheme-purple invert-dark font-semibold">
                {data?.recent_price !== null
                  ? `${
                      data.recent_price.price !== null
                        ? data.recent_price.price
                        : "Price Currently Unavailable"
                    }${
                      data.recent_price.price_currency !== null
                        ? data.recent_price.price_currency
                        : ""
                    }`
                  : "Price Currently Unavailable"}
              </p>
              <button
                onClick={() => handleRouteChange(data.id)}
                className="text-center bg-green-400 rounded-md p-2 font-semibold hover:text-white  hover:bg-scheme-red transition-colors duration-500"
              >
                See More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex border rounded-md mt-5 border-black h-14 gap-1 p-2 items-center justify-center">
        <button
          onClick={prevPage}
          className="cursor-pointer hover:bg-scheme-red duration-300 transition-colors p-2 rounded-md"
        >
          Prev
        </button>
        <ul className="flex gap-3 list-none">
          {numbers.map((n, index) => (
            <button
              key={index}
              className={`cursor-pointer p-2 w-10 text-center hover:bg-scheme-red duration-300 rounded-md transition-colors ${
                currentPage === n ? "active-page" : ""
              }`}
              onClick={() => changeCurrentPage(n)}
            >
              {n}
            </button>
          ))}
        </ul>

        <button
          onClick={nextPage}
          className="cursor-pointer hover:bg-scheme-red duration-300 transition-colors p-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllNfts;
