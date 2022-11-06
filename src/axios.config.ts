import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_URL;
// const BASE_URL = import.meta.env.VITE_ENVIRONMENT
const NODE_ENV = import.meta.env.MODE;

/**
 * if the VITE_APP_ENVIRONMENT is not equal to local,
 * use the deployed url
 * else use the base url
 */
console.log({ BASE_URL });
axios.defaults.timeout = 12500;
// axios.defaults.baseURL = "http://127.0.0su.1:4835/api/v1"
axios.defaults.baseURL = "https://nitride.onrender.com/api/v1";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

console.log(
  JSON.stringify({
    base_url: axios.defaults.baseURL,
    token: `Bearer ${localStorage.getItem("token")}`,
  })
);
