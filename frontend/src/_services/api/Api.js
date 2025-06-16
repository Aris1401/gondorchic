import axios from "axios";
import { routes } from "../../routes";

const localUrl = "http://127.0.0.1:8080/api";

const LOGIN_PAGE = "/";

function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem("accessToken");

  return accessToken;
}

const axiosInstance = axios.create({
  baseURL: localUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/api/clients/login" && err.response) {
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    } else {
      return Promise.reject(err.response);
    }

    return Promise.reject(err.response);
  }
);

export default axiosInstance;
