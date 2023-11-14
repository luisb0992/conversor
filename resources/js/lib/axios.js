import axios from "axios";
globalThis.axios = axios;

// Set the base URL for all requests
axios.defaults.baseURL = process.env.VITE_APP_URL;

globalThis.axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
};
