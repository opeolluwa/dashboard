import axios from "axios";
import { Preferences } from '@capacitor/preferences';
const BASE_URL = import.meta.env.VITE_APP_URL;
// const BASE_URL = import.meta.env.VITE_ENVIRONMENT
const NODE_ENV = import.meta.env.MODE;

/**
 * if the VITE_APP_ENVIRONMENT is not equal to local,
 * use the deployed url
 * else use the base url
 */


// JSON "set" example
// async function setObject() {
//   await Preferences.set({
//     key: 'user',
//     value: JSON.stringify({
//       id: 1,
//       name: 'Max'
//     })
//   });
// }

// // JSON "get" example
// async  function getObject() {
//   const ret = await Preferences.get({ key: 'user' });
//   const user = JSON.parse(ret.value);
// }

console.log({ BASE_URL });
axios.defaults.timeout = 12500;
// axios.defaults.baseURL = "http://127.0.0.1:4835/api/v1"
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
