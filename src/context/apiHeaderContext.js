import React, { createContext, useContext, useState } from "react";

const Header = createContext();

const ApiContext = ({ children }) => {
  const [headers, setHeaders] = useState({
    chain: "eth-main",
    token_type: "erc721",
    current_owners: true,
    current_price: true,
    page_size: 25,
    cursor: "",
  });
  const [findHeaders, setFindHeaders] = useState({
    chain: "eth-main",
    token_type: "",
    q: "Ape",
    filter: "token_name",
    page_size: 25,
  });
  const [getOwnerDataHeaders, setGetOwnerDataHeaders] = useState({
    contract_address: "",
    token_id: "",
    chain: "eth-main",
    page_size: 25,
  });
  const [getExchangeDataHeaders, setGetExchangeDataHeaders] = useState({

    chain: "eth-main",
    exchange: 'opensea',
    page_size: 25,
  });

  return (
    <Header.Provider value={{ headers, setHeaders, findHeaders, setFindHeaders, getOwnerDataHeaders, setGetOwnerDataHeaders, getExchangeDataHeaders, setGetExchangeDataHeaders }}>
      {children}
    </Header.Provider>
  );
};

export default ApiContext;

export const apiHeaderState = () => {
  return useContext(Header);
};
