import React from 'react';
import axios from 'axios';

import { API_KEY } from "../../../config";



async function GetAllOwnersAPI(params, url) {

  try {
    const response = await axios.get(url, {
      params,
      headers: {
        Accept: 'application/json',
        "X-API-KEY": `${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch NFTs");
  }
}

export default GetAllOwnersAPI