import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_APP_ID;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "apllication-id:": API_KEY,
  },
});

export async function fetchData<T>(table: string): Promise<T[]> {
  try {
    const response = await axiosInstance.get(`/data/${table}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${table}:`, error);
    return [];
  }
}

export default axiosInstance;
