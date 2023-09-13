import axios from 'axios'
import { API_KEY } from "../../../config";


const API_URL = "https://api.blockspan.com/v1/nfts";

async function GetAllAPI(params, url) {
  try {
    const response = await axios.get(API_URL, {
      params,
      headers: {
        Accept: 'application/json',
        'X-API-KEY': `${API_KEY}`,
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