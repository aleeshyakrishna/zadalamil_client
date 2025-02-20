import api from './BaseApi.js';

const isTokenValid = (token) => {
    try {
        const decoded = JSON.parse(atob(token.split('.')[1])); 
        return decoded.exp * 1000 > Date.now(); 
    } catch (error) {
        console.error("Invalid token format:", error);
        return false;
    }
};

export const fetchBanners = async (page = 1, limit = 10) => {
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
      const response = await api.get(`/api/admin/get-all-banners?page=${page}&limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetched banners data:", response.data);
      return await response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  export const createBanner = async (bannerData) => {
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
        const formData = new FormData();
        formData.append("name", bannerData.name);
        formData.append("bannerImg", bannerData.bannerImg); 
        
        const response = await api.post('/api/admin/create-banner', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateBannerStatus = async (bannerId, statusData, token) => {
    try {
        const response = await api.put(`/api/admin/edit-banner-status/${bannerId}`, statusData,
            {
                headers: {
                    Authorization: `Bearer ${token}`, 
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data; 
    } catch (error) {
        console.error("Error updating banne status:", error);
        throw error; 
    }
};

export const deleteBanner = async (bannerId) => {
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
        const response = await api.delete(`/api/admin/delete-banner/${bannerId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; 
    } catch (error) {
        console.error("Error deleting banner:", error.response?.data || error.message);
        throw error.response?.data?.message || "Something went wrong while deleting the banner.";
    }
};

export const updateBanner = async (bannerId, bannerData) => {
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
        const formData = new FormData();
        formData.append("name", bannerData.name);
        if (bannerData.bannerImage) {
            formData.append("logo", bannerData.bannerImage); 
        }

        const response = await api.put(`/api/admin/edit-banner/${bannerId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",  
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error updating banner:", error.response?.data || error.message);
        throw error.response?.data?.message || "Something went wrong while updating the banner.";
    }
};

export const checkBannerNameExists = async (bannerName, token) => {
    if (!token) {
        throw new Error("No authentication token found");
    }

    try {
        const response = await api.get(`/api/admin/check-banner-name/${bannerName}`, {
            headers: {
                Authorization: `Bearer ${token}`,
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
