import axios from "axios";
import { URL } from "../constants";
const api = axios.create({
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
export const searchGif = (data) =>
  api.get(URL, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      q: data,
    },
  });
