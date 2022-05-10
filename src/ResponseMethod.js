import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

export const publicRepuest = axios.create({
  baseURL: BASE_URL,
});

export const userRepuest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
