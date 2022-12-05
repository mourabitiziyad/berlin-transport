import axios from "axios";

const API = axios.create({
  baseURL: "https://v5.vbb.transport.rest",

  // This is the default, but it's good to be explicit
  responseType: "json",
});

export default API;