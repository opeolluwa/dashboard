import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_URL;
// const BASE_URL = import.meta.enT
const NODE_ENV = import.meta.env.MODE;

/**
 * if the VITE_APP_ENVIRONMENT is not equal to local,
 * use the deployed url
 * else use the base url
 */
console.log({ BASE_URL });
axios.defaults.timeout = 12500;
if (NODE_ENV === "development" || !import.meta.env.PROD) {
  axios.defaults.baseURL = BASE_URL;
} else {
  axios.defaults.baseURL = `/api/v1`;
}
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

console.log(
  JSON.stringify({
    base_url: import.meta.env.PROD,
    token: `Bearer ${localStorage.getItem("token")}`,
  })
);
