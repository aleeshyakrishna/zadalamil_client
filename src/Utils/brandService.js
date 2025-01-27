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

export const fetchBrands = async (page = 1, limit = 10) => {
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
        console.log("Fetching brands with token:", token);
        const response = await api.get("/api/admin/get-brands", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                page,
                limit,
            },
        });

        console.log("Fetched brands data:", response.data);

        return {
            brands: response.data.brands,
            totalBrands: response.data.totalBrands,
            totalPages: response.data.totalPages,
        };
    } catch (error) {
        console.error("Error fetching brands:", error.response?.data || error.message);
        throw error.response?.data?.message || "Something went wrong while fetching brands.";
    }
};


export const createBrand = async (brandData) => {
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

    try {
        const response = await api.post("/api/admin/create-brand", brandData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; 
    } catch (error) {
        console.error("Error creating brand:", error.response?.data || error.message);
        throw error.response?.data?.message || "Something went wrong while creating the brand.";
    }
};