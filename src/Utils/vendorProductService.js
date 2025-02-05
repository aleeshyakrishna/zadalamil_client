import api from './BaseVendorApi';

export const getProducts = async () => {
    try {
        const response = await api.get("/api/vendor/all-products");
        return response.data;
    } catch (error) {
        console.error("error fetching products:", error);
        throw error;
    }
}