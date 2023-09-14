import React from "react";

const TransactionCurrency = ({ data }) => {
  return (
    <div className="p-3 border-2 border-black rounded-md">
      {Array.isArray(data) && data.length === 0 ? (
        <p>Currency Data Not Available</p>
      ) : (
        <>
          {data.map((data, index) => (
            <div className="" key={index}>
              <p className="font-semibold">
                Symbol: <span className="font-medium">{data.symbol}</span>
              </p>
              <p className="font-semibold">
                Name: <span className="font-medium">{data.name}</span>
              </p>
              <p className="font-semibold">
                Decimals: <span className="font-medium">{data.decimals}</span>
              </p>
              <p className="font-semibold">
                Contract Address:{" "}
                <span className="font-medium text-sm">
                  {data.contract_address !== null
                    ? `${data.contract_address}`
                    : "Not Provided"}
                </span>
              </p>
              <p className="font-semibold">
                From Address:{" "}
                <span className="font-medium text-sm">
                  {data.from_address !== null
                    ? `${data.from_address}`
                    : "Not Provided"}
                </span>
              </p>
              <p className="font-semibold">
                To Address:{" "}
                <span className="font-medium text-sm">
                  {data.to_address !== null
                    ? `${data.to_address}`
                    : "Not Provided"}
                </span>
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
      )}
    </div>
  );
};

export default TransactionCurrency;
