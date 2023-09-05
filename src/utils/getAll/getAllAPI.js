import axios from 'axios'
import { apiHeaderState } from "@/context/apiHeaderContext";

import { API_KEY } from "../../../config";

const API_URL = "https://api.blockspan.com/v1/nfts";

async function GetAllAPI(params) {
  const { headers, } = apiHeaderState();
  try {
    const response = await axios.get(API_URL, {
      // params: {
      //   chain: `${headers.chain}`,
      //   token_type: `${headers.token_type}`, 
      //   include_current_owners: `${headers.current_owners}`,
      //   include_current_price: `${headers.current_price}`, 
      //   page_size: parseInt(headers.page_size),
      // },
      // params: {
      //   chain: 'eth-main',
      //   token_type: `erc721`, 
      //   include_current_owners: `true`,
      //   include_current_price: `true`, 
      //   page_size: 25,
      // },
      params,
      headers: {
        Accept: 'application/json',
        Authorization: `${API_KEY}`,
        "X-API-KEY": `${API_KEY}`,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("Failed to fetch NFTs", error)
    throw new Error("Failed to fetch NFTs");
  }
}

export default GetAllAPI