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
}