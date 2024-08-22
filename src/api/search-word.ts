import apiClient from "./apiClient";

const host = process.env.REACT_APP_API_URL;
export const fetchSearchWord = async (phrase: string) => {
    // apiClient.get(`${host}/api/v1/search?=${phrase.toLowerCase().trim()}`);

    return { de: 'Hund', eng: 'Dog', rus: 'Собака' };
};