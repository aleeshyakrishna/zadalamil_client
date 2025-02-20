import api from './BaseApi.js';

export const addCategory = async (categoryData) => {
    try {
        const authToken = localStorage.getItem("authToken");
        
            if(!authToken) {
                throw new Error("Unauthorized: No token found!");
            }
        const response = await api.post("/api/admin/add-category", categoryData, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating category:", error.response?.data || error.message);
        throw error.response?.data?.message || "Something went wrong while creating the category.";
    }
};

export const getCategories = async ( page = 1, limit = 10, status = "all", search = "") => {
    try {
        const authToken = localStorage.getItem("authToken");
        
            if(!authToken) {
                throw new Error("Unauthorized: No token found!");
            }

        const response = await api.get(`/api/admin/get-categories?page=${page}&limit=${limit}&search=${search}&status=${status}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        console.log("Fetched categories data:", response.data);

        return {
            categories: response.data.categories,
            totalCategories: response.data.totalCategories,
            totalPages: response.data.totalPages,
        };
    } catch (error) {
        throw error.response?.data?.message || "Something went wrong";
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const authToken = localStorage.getItem("authToken");
        
            if(!authToken) {
                throw new Error("Unauthorized: No token found!");
            }
        const response = await api.delete(`/api/admin/delete-category/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Something went wrong";
    }
};

export const updateCategory = async (categoryId, categoryData) => {
    try {
        const authToken = localStorage.getItem("authToken");
        
        if (!authToken) {
            throw new Error("Unauthorized: No token found!");
        }

        const formData = new FormData();
        formData.append("name", categoryData.name);

        if (categoryData.categoryImg) {
            formData.append("categoryImg", categoryData.categoryImg);
        }

        const response = await api.put(`/api/admin/edit-category/${categoryId}`, formData, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data",  
            },
        });

        return response.data; 
    } catch (error) {
        console.error("Error updating category:", error);
        throw error.response?.data?.message || "Something went wrong";
    }
};

export const checkCategoryNacheckCategoryNameExists = async (categoryName) => {
    try {
        const authToken = localStorage.getItem("authToken");
        
            if(!authToken) {
                throw new Error("Unauthorized: No token found!");
            }
    
    const response = await api.get(`/api/admin/check-category-name/${categoryName}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });

    const data = response.data;

        if (response.status === 200) {
            return { exists: false, message: data.message };
        } else {
            return { exists: true, message: data.message };
        }
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};

export const updateCategoryStatus = async (categoryId, statusData) => {
    try {
        const authToken = localStorage.getItem("authToken");
        
            if(!authToken) {
                throw new Error("Unauthorized: No token found!");
            }  
        const response = await api.put(`api/admin/edit-category-status/${categoryId}`, statusData, 
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,  
                }
            });

        return response.data;
    } catch (error) {
        console.error('Error updating category status:', error);
        throw error;
    }
};


