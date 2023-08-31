import axios from "axios";

const customAxios = axios.create({
  // baseURL: "https://buuk-me-now.onrender.com/api/v1",
  baseURL: "http://localhost:4000/api/v1",
});

customAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
