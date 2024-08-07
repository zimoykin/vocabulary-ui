import apiClient from './apiClient';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const postRegister = async (email: string, password: string) => {
    const response = await apiClient.post(`${API_BASE_URL}/api/v1/auth/register`, { email, password });
    return response.data;
};