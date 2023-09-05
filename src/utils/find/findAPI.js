import axios from 'axios'
import { apiHeaderState } from "@/context/apiHeaderContext";
import { API_KEY } from "../../../config";

const API_URL = "https://api.blockspan.com/v1/nfts/search";

async function FindAllNFTs() {
  const { findHeaders } = apiHeaderState();
  try {
    const response = await axios.get(API_URL, {
      params: {
        chain: `${findHeaders.chain}`,
        token_type: `${findHeaders.token_type}`, 
        q: `${findHeaders.q}`,
        filter: `${findHeaders.filter}`,
        page_size: parseInt(findHeaders.page_size),
      },
      headers: {
        "x-api-key": `${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch NFTs");
  }
}

export default FindAllNFTs