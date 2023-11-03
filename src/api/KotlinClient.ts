import axios from "axios";
import Cookies from "js-cookie";

const KotlinClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

// 요청 인터셉터 추가
KotlinClient.interceptors.request.use(
  (config) => {
    if (config.url && config.url.startsWith("/api/ch/")) {
      const sessionId = Cookies.get("sessionId");
      if (sessionId) {
        config.headers["Authorization"] = sessionId;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default KotlinClient;
