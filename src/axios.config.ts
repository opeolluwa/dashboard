import axios from "axios";
axios.defaults.baseURL = "https://nitride.onrender.com/api/v1"
axios.defaults.timeout = 12500;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

console.log(
  JSON.stringify({
    base_url: axios.defaults.baseURL,
    token: `Bearer ${localStorage.getItem("token")}`,
  })
);
