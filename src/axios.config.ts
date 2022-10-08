import axios from "axios";
// import { authStore } from "./main";
//if the application is running in development, use the development baseUrl else, use "/"
const NODE_ENV = import.meta.env.MODE;
if (NODE_ENV === "development" || !import.meta.env.PROD) {
  axios.defaults.baseURL = "http://127.0.0.1:4835/api/v1";
} else {
  axios.defaults.baseURL = `api/v1`;
}
//set request timeout to 12.5 seconds 
axios.defaults.timeout = 12500;

//fetch the user authorization token from store and save it 
// console.log(authorizationStore.authorizationToken);

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
console.log(JSON.stringify({
  base_url: import.meta.env.PROD, token: `Bearer ${localStorage.getItem("token")}`
}));

// axios.defaults.withCredentials = true;
