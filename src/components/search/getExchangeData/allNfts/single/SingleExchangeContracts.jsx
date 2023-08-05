import React from "react";

const SingleExchangeContracts = ({ data }) => {
  return (
    <div className="bg-slate-400 w-full h-full p-3 rounded-md ">
      {data ? (
        <div className="flex flex-col">
          {data.map((data, index) => (
            <div key={index} className="flex flex-col">
                <p className="font-semibold">Contract {index}: <span className="font-medium text-[11px] sm:text-sm md:text-sm lg:text-base">{data.contract_address}</span></p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p>Data Not Available😔</p>
        </>
      )}
    </div>
  );
};

export default SingleExchangeContracts;
