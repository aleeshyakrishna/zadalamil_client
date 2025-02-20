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

export const getCategories = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
        console.error("No authentication token found.");
        throw new Error("No authentication token found.");
    }

    if (!isTokenValid(token)) {
        console.error("Authentication token is invalid or expired.");
        localStorage.removeItem("authToken");
        throw new Error("Authentication token is invalid or expired.");
    }

    if (!token) {
        throw new Error("No authentication token found");
    }

    try {
        const response = await api.get(`/api/user/get-categories`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return {
            categories: response.data.categories,
            totalCategories: response.data.totalCategories,
        };
    } catch (error) {
        throw error.response?.data?.message || "Something went wrong";
    }
};