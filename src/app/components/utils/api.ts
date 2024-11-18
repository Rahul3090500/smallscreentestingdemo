// utils/api.js
import axios from "axios";

const STRAPI_URL = "https://strapi2.quotify.pro";

// Generalized API call function
export async function apiRequest(endpoint:any, method = "GET", data = null, params = {}) {
  try {
    const url = `${STRAPI_URL}${endpoint}`;
    const options = {
      method,
      url,
      data, // For POST/PUT requests
      params, // Query parameters for GET requests
    };
    const response = await axios(options);

    // Parse and format the data for ease of use
    if (response.data && response.data.data) {
      return response.data.data.map((item:any) => ({
        id: item.id,
        stringCode: item.attributes.stringCode,
        stringValue: item.attributes.stringValue,
      }));
    }
    return []; // Return empty array if no data is available
  } catch (error) {
    console.error(`Error with API request (${method} ${endpoint}):`, error);
    throw error; // Re-throw error to handle it in the calling context
  }
}
