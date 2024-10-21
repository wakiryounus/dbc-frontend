import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_DBC_SERVICE_LOCAL,
  withCredentials: true,
});

export default api;
