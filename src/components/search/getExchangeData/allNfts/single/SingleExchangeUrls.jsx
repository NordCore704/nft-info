import React from "react";

const SingleExchangeUrls = ({ data }) => {
  return (
    <div className="bg-slate-400 w-full h-full p-3 rounded-md self-start justify-self-center">
      {data ? (
        <>
          <div className="flex gap-1 flex-col">
            <p className="font-semibold ">
              Chat URL:{" "}
              {data.chat_url ? (
                <a
                  className="font-medium underline text-blue-700 visited:text-purple-700"
                  target="blank"
                  href={data.chat_url}
                >
                  {data.chat_url}
                </a>
              ) : (
                <span className="font-medium">{`URL Not Available`}</span>
              )}
            </p>
            <p className="font-semibold ">
              Discord URL:{" "}
              {data.discord_url ? (
                <a
                  className="font-medium underline text-blue-700 visited:text-purple-700"
                  target="blank"
                  href={data.discord_url}
                >
                  {data.discord_url}
                </a>
              ) : (
                <span className="font-medium">{`URL Not Available`}</span>
              )}
            </p>
            <p className="font-semibold ">
              Telegram URL:{" "}
              {data.telegram_url ? (
                <a
                  className="font-medium underline text-blue-700 visited:text-purple-700"
                  target="blank"
                  href={data.telegram_url}
                >
                  {data.telegram_url}
                </a>
              ) : (
                <span className="font-medium">{`URL Not Available`}</span>
              )}
            </p>
            <p className="font-semibold ">
              Wiki URL:{" "}
              {data.wiki_url ? (
                <a
                  className="font-medium underline text-blue-700 visited:text-purple-700"
                  target="blank"
                  href={data.wiki_url}
                >
                  {data.wiki_url}
                </a>
              ) : (
                <span className="font-medium">{`URL Not Available`}</span>
              )}
            </p>
            <p className="font-semibold">
              Instagram Username:{" "}
              <span className="font-medium">
                {data.instagram_username
                  ? `${data.instagram_username}`
                  : `Username Not Available`}
              </span>
            </p>
            <p className="font-semibold">
              Twitter Username:{" "}
              <span className="font-medium">
                {data.twitter_username
                  ? `${data.twitter_username}`
                  : `Username Not Available`}
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <p>Data Not Available😔</p>
        </>
      )}
    </div>
  );
};

export default SingleExchangeUrls;
