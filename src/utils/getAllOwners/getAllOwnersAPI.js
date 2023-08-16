import axios from 'axios'
import { apiHeaderState } from "@/context/apiHeaderContext";

import { API_KEY } from "../../../config";



export async function getAllOwners() {
  const { getOwnerDataHeaders, } = apiHeaderState();
  const API_URL = `https://api.blockspan.com/owners/contract/${getOwnerDataHeaders.contract_address}/token/${getOwnerDataHeaders.token_id}`;
  try {
    const response = await axios.get(API_URL, {
      params: {
        chain: `${getOwnerDataHeaders.chain}`,
        page_size: parseInt(getOwnerDataHeaders.page_size),
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