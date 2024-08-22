import apiClient from './apiClient';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const fetchUserData = async () => {
    const response = await apiClient.get(`${API_BASE_URL}/api/v1/auth/me`);
    return response.data;
};