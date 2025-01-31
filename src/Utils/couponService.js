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
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    console.log("Token in localStorage:", token);
    console.log("User Timezone:", userTimezone);

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
        const response = await api.get(`/api/admin/all-coupons?page=${page}&limit=${limit}&userTimezone=${userTimezone}`, {
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

export const createCoupon = async (couponData) => {
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
        console.log("Sending Coupon Data:", couponData); 

        const response = await api.post("/api/admin/create-coupon", couponData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        return response.data; 
    } catch (error) {
        console.error("Error creating coupon:", error.response?.data || error.message);
        throw error.response?.data?.message || "Something went wrong while creating the coupon.";
    }
};

export const updateCouponStatus = async (couponId, statusData, token) => {
    try {
        const response = await api.put(`/api/admin/edit-coupon-status/${couponId}`, statusData,
            {
                headers: {
                    Authorization: `Bearer ${token}`, 
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data; 
    } catch (error) {
        console.error("Error updating coupon status:", error);
        throw error; 
    }
};