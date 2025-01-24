import api from './BaseUrl.js';

export const addCategory = async (name, token) => {
    if(!token) {
        throw new Error("No authentication token found");
    }

    try {
        const response = await api.post("/api/admin/add-category", 
            { name },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Something went wrong";
    }
};