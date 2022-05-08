import axios from "axios";

const BASE_URL = "https://mern-board-ecommerce.herokuapp.com/api";
const TOKEN = "test";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
