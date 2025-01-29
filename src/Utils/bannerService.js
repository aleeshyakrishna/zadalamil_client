import api from './BaseUrl.js';

const isTokenValid = (token) => {
    try {
        const decoded = JSON.parse(atob(token.split('.')[1])); 
        return decoded.exp * 1000 > Date.now(); 
    } catch (error) {
        console.error("Invalid token format:", error);
        return false;
    }
};

export const fetchBanners = async (page = 1, limit = 10) => {
    const token = localStorage.getItem("authToken");

    console.log("Token in localStorage:", token);

    if (!token) {
        console.error("No authentication token found.");
        throw new Error("No authentication token found.");
    }

    if (!isTokenValid(token)) {
        console.error("Authentication token is invalid or expired.");
        localStorage.removeItem("authToken");
        throw new Error("Authentication token is invalid or expired.");
    }

    try {
      const response = await api.get(`/api/admin/get-all-banners?page=${page}&limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetched brands data:", response.data);
      return await response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };