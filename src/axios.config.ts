import axios from "axios";
import dotenv from "dotenv";
dotenv.config()
axios.defaults.baseURL = process.env.ENVIRONMENT = "production" ? "/api/v1" : "http://127.0.0.1:8405/api/v1";
axios.defaults.timeout = 3500;
// axios.defaults.withCredentials = true;
