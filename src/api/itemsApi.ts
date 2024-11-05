import axios from "axios";

const API_URL = "http://localhost:8000/items";

export const fetchItems = async () => {
    const response = await axios.get(API_URL);
    return response.data.data;
};

export const addItem = async (name: string) => {
    const response = await axios.post(API_URL, { name });
    return response.data.data;
};
