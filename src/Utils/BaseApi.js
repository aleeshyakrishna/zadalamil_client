import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001", // Update as needed
});

api.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("authToken");
            window.location.href = "/admin/admin-login"; // Redirect user to login
        }
        return Promise.reject(error);
    }
);

export default api;
