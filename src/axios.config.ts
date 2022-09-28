import axios from "axios";
//if the application is running in development, use the development baseUrl else, use "/"
const NODE_ENV = import.meta.env.MODE;
if (NODE_ENV === "development" || !import.meta.env.PROD) {
  axios.defaults.baseURL = "http://127.0.0.1:4835/api/v1";
} else {
  axios.defaults.baseURL = `api/v1`;
}
axios.defaults.timeout = 3500;
console.log({ base_url: import.meta.env.PROD });

// axios.defaults.withCredentials = true;
