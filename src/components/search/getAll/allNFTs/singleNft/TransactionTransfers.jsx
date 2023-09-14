import React from "react";

const TransactionTransfers = ({ data }) => {
  return (
    <div className="border-2 border-black p-4 rounded-md">
      {Array.isArray(data) && data.length !== 0 ? (
        <>
          {data.map((data, index) => (
            <div className="flex flex-col gap-1.5" key={index}>
              <p className="font-semibold">
                Symbol: <span className="font-medium">{data?.symbol}</span>
              </p>
              <p className="font-semibold">
                Name: <span className="font-medium">{data.name}</span>
              </p>
              <p className="font-semibold">
                Decimals: <span className="font-medium">{data.decimals}</span>
              </p>
              <p className="font-semibold">
                Contract Address:{" "}
                <span className="font-medium text-sm ">
                  {data.contract_address}
                </span>
              </p>
              <p className="font-semibold ">
                From Address:{" "}
                <span className="font-medium text-sm">{data.from_address}</span>
              </p>
              <p className="font-semibold">
                To Address:{" "}
                <span className="font-medium text-sm">{data.to_address}</span>
              </p>
              <p className="font-semibold">
                Price:{" "}
                <span className="font-medium">
                  {data.price}
                  {data.symbol}
                </span>
              </p>
            </div>
          ))}
        </>
      ) : (
        <>
          <p>Transfer Data Not Available</p>
        </>
      )}
    </div>
  );
};

export default TransactionTransfers;
