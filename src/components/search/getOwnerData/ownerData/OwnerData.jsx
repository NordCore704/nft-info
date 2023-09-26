import React from "react";
import Link from "next/link";

const OwnerData = ({ data, summaryData }) => {
  const date = data.map((data) => {
    return data.minted_at;
  });
  const firstOwned = data.map((data) => {
    return data.first_owned;
  });
  const lastOwned = data.map((data) => {
    return data.last_owned;
  });

  const mintDateFormat = new Date(date.toString()).toDateString();
  const firstDateFormat = new Date(firstOwned.toString()).toDateString();
  const lastDateFormat = new Date(lastOwned.toString()).toDateString();

  console.log(summaryData);

  return (
    <div className="h-screen p-5 flex flex-col items-center justify-center">
      {data ? (
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="">
            {summaryData.map((data, index) => (
              <div className="" key={index}>
                  <p className="font-semibold text-3xl">Token Summary:</p>
                  <p className="font-semibold">Chain: <span className="capitalize font-medium">{data.chain}</span></p>
                  <p className="font-semibold">Contract Address: <span className="text-md font-medium">{data.contract_address}</span></p>
                  <p className="font-semibold">Token ID: <span className="font-medium">{data.token_id}</span></p>
                  <p className="font-semibold">Total Owners: <span className="font-medium">{data.total_owners}</span></p>
                  <p className="font-semibold">Unique Owners: <span className="font-medium">{data.unique_owners}</span></p>
              </div>
            ))}
          </div>
          <div className="">
            <p className="font-semibold text-3xl">Ownership Data:</p>
            {data.map((data, index) => (
              <div
                className="flex flex-col justify-center gap-2 h-full"
                key={index}
              >
                <p className="font-semibold">
                  Token Type:{" "}
                  <span className="uppercase font-medium">
                    {data.token_type}
                  </span>
                </p>
                <p className="font-semibold">
                  Token ID: <span className="font-medium">{data.id}</span>
                </p>
                <p className="font-semibold">
                  Owner Address:{" "}
                  <span className="font-medium">{data.contract_address}</span>
                </p>
                <p className="font-semibold">
                  Times Acquired:{" "}
                  <span className="font-medium">{data.times_acquired}</span>
                </p>
                <p className="font-semibold">
                  Minted At:{" "}
                  <span className="font-medium">
                    {data.minted_at ? `${mintDateFormat}` : `Date Not Provided`}
                  </span>
                </p>
                <p className="font-semibold">
                  First Owned:{" "}
                  <span className="font-medium">
                    {data.minted_at
                      ? `${firstDateFormat}`
                      : `Date Not Provided`}
                  </span>
                </p>
                <p className="font-semibold">
                  Last Owned:{" "}
                  <span className="font-medium">
                    {data.minted_at ? `${lastDateFormat}` : `Date Not Provided`}
                  </span>
                </p>
                <p className="font-semibold">
                  Quantity:{" "}
                  <span className="font-medium">
                    {data.quantity
                      ? `${data.quantity}`
                      : `Quantity Not Provided`}
                  </span>
                </p>
                <p className="font-semibold">
                  Owner Type:{" "}
                  <span className="font-medium capitalize">
                    {data.owner_type
                      ? `${data.owner_type}`
                      : `Owner Type Data Not Provided`}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <Link
            href={`/search/getOwnerData`}
            className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
          >
            Go Back
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 items-center justify-center h-full">
            <p className="text-5xl font-semibold">Data Could Not Be Found!</p>
            <p>Probably your search Preferences doesn't match our data?😔</p>
            <Link
            href={`/search/getOwnerData`}
            className="p-2 text-center bg-green-500 w-32 rounded-full hover:bg-scheme-red duration-500 transition-colors font-semibold hover:text-white"
          >
            Go Back
          </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default OwnerData;
