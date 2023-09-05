import React from 'react';
import axios from 'axios';
import { apiHeaderState } from "@/context/apiHeaderContext";

import { API_KEY } from "../../../config";
const key = 'q72R8FaDM0YEDQ0ZVWGAbNxwfXecUbjJ'



async function GetAllOwners() {
  const { getOwnerDataHeaders, } = apiHeaderState();
  console.log(getOwnerDataHeaders); 
  const API_URL = `https://api.blockspan.com/owners/contract/${getOwnerDataHeaders.contract_address}/token/${parseInt(getOwnerDataHeaders.token_id)}`;
  try {
    const response = await axios.get(API_URL, {
      params: {
        contract_address: `${getOwnerDataHeaders.contract_address}`,
        token_id: `${getOwnerDataHeaders.token_id}`,
        chain: `${getOwnerDataHeaders.chain}`,
        cursor: '',
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

export default GetAllOwners