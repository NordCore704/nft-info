import axios from "axios";
import { API_KEY } from "../../../config";

const API_URL = "https://api.blockspan.com/v1/exchange/collections";

async function GetAllExchangeAPI(params) {
  try {
    const response = await axios.get(API_URL, {
      params,
      headers: {
        Accept: 'application/json',
        "X-API-KEY": `${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Failed to fetch NFTs ', error);
    throw new Error("Failed to fetch NFTs");
  }
}

export default GetAllExchangeAPI;