import axios from "axios";

// Fetch dummy data function
export const fetchDummyData = async () => {
  try {
    // Simulating an API call with Axios
    const response = await axios.get("/productData.json");

    return response?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
