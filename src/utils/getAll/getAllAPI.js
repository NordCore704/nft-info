import axios from 'axios'
import { apiHeaderState } from "@/context/apiHeaderContext";

import { API_KEY } from "../../../config";

const API_URL = "https://api.blockspan.com/v1/nfts";

export async function getAllNFTs() {
  const { headers, } = apiHeaderState();
  try {
    const response = await axios.get(API_URL, {
      params: {
        chain: headers.chain,
        token_type: `${headers.token_type}`, 
        include_current_owners: `${headers.current_owners}`,
        include_current_price: `${headers.current_price}`, 
        page_size: parseInt(headers.page_size),
      },
      headers: {
        "x-api-key": `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch NFTs");
  }
}
