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

export const fetchCoupons = async (page = 1, limit = 10) => {
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
        console.log("Fetching coupons with token:", token);
        const response = await api.get(`/api/admin/all-coupons?page=${page}&limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Fetched Coupons data:", response.data);
        

        return {
            coupons: response.data.coupons,
            totalCoupons: response.data.totalCoupons,
            totalPages: response.data.totalPages,
        };
    } catch (error) {
        console.error("Error fetching coupons:", error.response?.data || error.message);
        throw error.response?.data?.message || "Something went wrong while fetching coupons.";
    }
};
