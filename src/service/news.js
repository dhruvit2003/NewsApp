import axios from "axios";

const API_KEY = "b9e9463181e542acab9fc86267077c85"
const BaseURL = "https://newsapi.org/v2/top-headlines"

export const getCategoricalNews = async (country, category) => {
    try {
        return await axios.get(`${BaseURL}?country=${country}${category != null ? `&category=${category}` : ``}&apiKey=${API_KEY}`);
    }
    catch (error) {
        throw error;
    }
}

export const getNewsBySearch = async (search) => {
    try {
        return await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    }
    catch (error) {
        throw error;
    }
}
