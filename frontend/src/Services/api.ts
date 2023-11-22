import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:44355/",
});

export default api;