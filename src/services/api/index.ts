import axios from "axios";

const BASE_URL = "https://api-interview.vanhack.com/";
const API_VERSION = "v1";

export const axiosClient = axios.create({
  baseURL: BASE_URL + API_VERSION,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
