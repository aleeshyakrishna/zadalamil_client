import api from './BaseVendorApi';

export const getProducts = async () => {
    try {
        const response = await api.get("/api/vendor/all-products");
        return response.data;
    } catch (error) {
        console.error("error fetching products:", error);
        throw error;
    }
};

export const addProduct = async (FormData) => {
    try {
        const response = await api.post("/api/vendor/add-product", FormData);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
}