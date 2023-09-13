import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nftGirl } from "@/exports/image-exports";

const AllExchangeNFT = ({ data }) => {
  console.log(data);
  // const [currentPage, setCurrentPage] = useState(1);
  // const nftsPerPage = 5;
  // const lastIndex = currentPage * nftsPerPage;
  // const firstIndex = lastIndex - nftsPerPage;
  // const nfts = data.slice(firstIndex, lastIndex);
  // const nPage = Math.ceil(data.length / nftsPerPage);
  // const numbers = [...Array(nPage + 1).keys()].slice(1);

  // const prevPage = (e) => {
  //   e.preventDefault();
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const changeCurrentPage = (id) => {
  //   setCurrentPage(id);
  // };

  // const nextPage = (e) => {
  //   e.preventDefault();
  //   if (currentPage !== nPage) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handleRouteChange = (e) => {
    
  //   router.push({ pathname: `/search/getExchangeData/allNFTs/single/${e}`, query: {data: e}})
  // }

  // return (
  //   <div className="p-4">
  //     <div className="paginator flex flex-col gap-4">
  //       {nfts.map((data, index) => (
  //         <div
  //           className="p-3 rounded-md bg-gray-400 flex flex-col gap-1"
  //           key={index}
  //         >
  //           <div className=" flex gap-2 items-center">
  //             <Image
  //               src={nftGirl}
  //               className="rounded-full border w-10 h-10 object-cover border-black"
  //               alt="image"
  //             />
  //             <p className={`font-semibold text-lg `}>
  //               {data.name === null
  //                 ? "Token Name Unavailable"
  //                 : data.name}
  //             </p>
  //           </div>

  //           <p className={``}>
  //             Exchange:{" "}
  //             <span className="text-scheme-purple uppercase font-semibold">
  //               {data.exchange}
  //             </span>
  //           </p>

  //           <div className="self-end flex gap-2 items-center">
  //             <p className="text-scheme-purple invert-dark font-semibold">
  //               Floor Price:{" "}
  //               <span>
  //                 {" "}
  //                 {data?.stats.floor_price !== null
  //                   ? `${data.stats.floor_price}`
  //                   : "Floor Price Currently Unavailable"}
  //               </span>
  //             </p>
  //             <button
  //               onClick={handleRouteChange}
  //               className="text-center bg-green-400 rounded-md p-2 font-semibold hover:text-white  hover:bg-scheme-red transition-colors duration-500"
  //             >
  //               See More
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //     <div className="flex border rounded-md mt-5 border-black h-14 gap-1 p-2 items-center justify-center">
  //       <button
  //         onClick={prevPage}
  //         className="cursor-pointer hover:bg-scheme-red duration-300 transition-colors p-2 rounded-md"
  //       >
  //         Prev
  //       </button>
  //       <ul className="flex gap-3 list-none">
  //         {numbers.map((n, index) => (
  //           <button
  //             key={index}
  //             className={`cursor-pointer p-2 w-10 text-center hover:bg-scheme-red duration-300 rounded-md transition-colors ${
  //               currentPage === n ? "active-page" : ""
  //             }`}
  //             onClick={() => changeCurrentPage(n)}
  //           >
  //             {n}
  //           </button>
  //         ))}
  //       </ul>

  //       <button
  //         onClick={nextPage}
  //         className="cursor-pointer hover:bg-scheme-red duration-300 transition-colors p-2 rounded-md"
  //       >
  //         Next
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default AllExchangeNFT;
