import axios from "axios";
globalThis.axios = axios;

globalThis.axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
};
