import api from './BaseApi.js';

// const isTokenValid = (token) => {
//     try {
//         const decoded = JSON.parse(atob(token.split('.')[1])); 
//         return decoded.exp * 1000 > Date.now(); 
//     } catch (error) {
//         console.error("Invalid token format:", error);
//         return false;
//     }
// };

export const getUsers = async (status = "all", page = 1, limit = 10) => {
    
    try {
        const authToken = localStorage.getItem("authToken");
    
        if(!authToken) {
            throw new Error("Unauthorized: No token found!");
        }
        const response = await api.get(`/api/admin/users-list?page=${page}&limit=${limit}`, {
            params: { status },
            headers: { Authorization: `Bearer ${authToken}` }, 
        });
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const updateUserStatus = async (userId, status) => {

    try {
        const authToken = localStorage.getItem("authToken");
    
        if(!authToken) {
            throw new Error("Unauthorized: No token found!");
        }
        const response = await api.put(
            `/api/admin/edit-user-status/${userId}`,
            { status },
            { headers: { Authorization: `Bearer ${authToken}` } }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating user status:", error);
        throw error;
    }
};

export const deleteUser = async (userId) => {

    try {
        const authToken = localStorage.getItem("authToken");
    
        if(!authToken) {
            throw new Error("Unauthorized: No token found!");
        }
        const response = await api.delete(`/api/admin/delete-user/${userId}`, {
            headers: { Authorization: `Bearer ${authToken}`},
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting user: ", error);
        throw error;
    }
};