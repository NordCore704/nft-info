import React from "react";
import Link from "next/link";

const SingleFind = ({ data }) => {
  return (
    <div className="p-5 flex items-center justify-center w-full sm:w-full md:w-full lg:w-full h-screen">
      {data.map((data, index) => (
        <div className="flex flex-col gap-3" key={index}>
          <p className="text-4xl font-semibold">{data.example_token_name}</p>
          <p className="font-semibold">
            Token Type:{" "}
            <span className="font-medium uppercase">{data.token_type}</span>
          </p>
          <p className="font-semibold">
            Contract Address:{" "}
            <span className="font-medium">{data.contract_address}</span>
          </p>
          <p className="font-semibold ">
            Description:{" "}
            <span className="font-medium">
              {data.example_token_description
                ? data.example_token_description
                : "Token Description Unavailable"}
            </span>
          </p>

          <Link
            href={`/search/find/allNfts`}
            className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
          >
            Go Back
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SingleFind;
