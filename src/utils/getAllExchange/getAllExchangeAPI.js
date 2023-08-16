import axios from 'axios'
import { apiHeaderState } from "@/context/apiHeaderContext";

import { API_KEY } from "../../../config";

const API_URL = "https://api.blockspan.com/v1/exchange/collections";

export async function getAllExchangeCollections() {
  const { getExchangeDataHeaders, } = apiHeaderState();
  try {
    const response = await axios.get(API_URL, {
      params: {
        chain: `${getExchangeDataHeaders.chain}`,
        exchange: `${getExchangeDataHeaders.exchange}`, 
        page_size: parseInt(getExchangeDataHeaders.page_size),
      },
      getExchangeDataHeaders: {
        "x-api-key": `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch NFTs");
  }
}
