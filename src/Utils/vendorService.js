import api from "../Utils/BaseApi.js";

export const fetchVendors = async  () => {
    try {
        const authToken = localStorage.getItem("authToken");

        if(!authToken) {
            throw new Error("Unauthorized: No token found!");
        }

        const response = await api.get("/api/admin/vendors", {
            headers: { Authorization: `Bearer ${authToken}`},
        });
        return response.data;
    } catch (error) {
        console.error("error fetching vendors:", error);
        throw error;
    }
};

export const deleteVendor = async (vendorId) => {
    try {
        const authToken = localStorage.getItem("authToken");

        if(!authToken) {
            throw new Error("Unauthorized: No token found!");
        }
        const response = await api.delete(`/api/admin/delete-vendor/${vendorId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        return response.data; 
    } catch (error) {
        console.error("Error deleting vendor:", error.response?.data || error.message);
        throw error.response?.data?.message || "Something went wrong while deleting the vendor.";
    }
};