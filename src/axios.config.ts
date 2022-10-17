import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_URL;

console.log({ baseUrl });
axios.defaults.timeout = 12500;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

console.log(
  JSON.stringify({
    base_url: import.meta.env.PROD,
    token: `Bearer ${localStorage.getItem("token")}`,
  })
);
