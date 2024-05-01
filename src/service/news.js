import axios from "axios";

const API_KEY = "7d1a5eac88924ecc82f4a4d8e3fe8d66"
const BaseURL = "https://newsapi.org/v2/top-headlines"

export const getCategoricalNews = async (country, category) => {
    try {
        return await axios.get(`${BaseURL}?country=${country}${category != null ? `&category=${category}` : ``}&apiKey=${API_KEY}`);
    }
    catch (error) {
        throw error;
    }
}
