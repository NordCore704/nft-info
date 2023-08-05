import React from "react";

const SingleStats = ({ data }) => {
  return (
    <div className="bg-slate-400 w-full h-full p-3 rounded-md">
      {data ? (
        <div className="flex flex-col gap-1">
          <p className="font-semibold">
            Market Cap:{" "}
            <span className="font-medium">
              {data.market_cap
                ? `${data.market_cap}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Number Of Owners:{" "}
            <span className="font-medium">
              {data.market_cap
                ? `${data.num_owners}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Floor Price:{" "}
            <span className="font-medium">
              {data.floor_price != null
                ? `${data.floor_price}`
                : `Floor Price Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Total Minted:{" "}
            <span className="font-medium">
              {data.total_minted != null
                ? `${data.total_minted}`
                : `Total Minted Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Total Supply:{" "}
            <span className="font-medium">
              {data.total_supply != null
                ? `${data.total_supply}`
                : `Total Supply Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Total Volume:{" "}
            <span className="font-medium">
              {data.total_volume != null
                ? `${data.total_volume}`
                : `Total Volume Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            One Day Volume:{" "}
            <span className="font-medium">
              {data.one_day_volume != null
                ? `${data.one_day_volume}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Seven Day Volume:{" "}
            <span className="font-medium">
              {data.seven_day_volume != null
                ? `${data.seven_day_volume}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Thirty Day Volume:{" "}
            <span className="font-medium">
              {data.thirty_day_volume != null
                ? `${data.thirty_day_volume}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            One Day Volume Change:{" "}
            <span className="font-medium">
              {data.one_day_volume_change != null
                ? `${data.one_day_volume_change}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Seven Day Volume Change:{" "}
            <span className="font-medium">
              {data.seven_day_volume_change != null
                ? `${data.seven_day_volume_change}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Thirty Day Volume Change:{" "}
            <span className="font-medium">
              {data.thirty_day_volume_change != null
                ? `${data.thirty_day_volume_change}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Total Sales:{" "}
            <span className="font-medium">
              {data.total_sales != null
                ? `${data.total_sales}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            One Day Sales:{" "}
            <span className="font-medium">
              {data.one_day_sales != null
                ? `${data.one_day_sales}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Seven Day Sales:{" "}
            <span className="font-medium">
              {data.seven_day_sales != null
                ? `${data.seven_day_sales}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Thirty Day Sales:{" "}
            <span className="font-medium">
              {data.thirty_day_sales != null
                ? `${data.thirty_day_sales}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Total Average Price:{" "}
            <span className="font-medium">
              {data.total_average_price != null
                ? `${data.total_average_price}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            One Day Average Price:{" "}
            <span className="font-medium">
              {data.one_day_average_price != null
                ? `${data.one_day_average_price}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Seven Day Average Price:{" "}
            <span className="font-medium">
              {data.seven_day_average_price != null
                ? `${data.seven_day_average_price}`
                : `Data Not Available`}
            </span>
          </p>
          <p className="font-semibold">
            Thrty Day Average Price:{" "}
            <span className="font-medium">
              {data.thirty_day_average_price != null
                ? `${data.thirty_day_average_price}`
                : `Data Not Available`}
            </span>
          </p>
        </div>
      ) : (
        <>
          <p>Stats Not Available</p>
        </>
      )}
    </div>
  );
};

export default SingleStats;
