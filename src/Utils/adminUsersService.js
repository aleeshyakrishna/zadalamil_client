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

export const getUsers = async (status = "all", page = 1, limit = 10) => {
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
        const response = await api.get(`/api/admin/users-list?page=${page}&limit=${limit}`, {
            params: { status },
            headers: { Authorization: `Bearer ${token}` }, 
        });
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const updateUserStatus = async (userId, status) => {
    const token = localStorage.getItem("authToken");

    if (!token) {
        console.error("No authentication token found.");
        throw new Error("No authentication token found.");
    }

    try {
        const response = await api.put(
            `/api/admin/edit-user-status/${userId}`,
            { status },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating user status:", error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    const token = localStorage.getItem("authToken");

    if(!token) {
        console.error("No Authentication token found");
        throw new Error("No authentication token found");
    }

    try {
        const response = await api.delete(`/api/admin/delete-user/${userId}`, {
            headers: { Authorization: `Bearer ${token}`},
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting user: ", error);
        throw error;
    }
};