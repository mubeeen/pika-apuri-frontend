import axios from 'axios';
import { loginCredentials, signupCredentials } from '../types';

const BASE_API_URL = 'http://localhost:3000/auth';

export const loginAPI = async (credentials: loginCredentials) => {
    const response = await axios.post(`${BASE_API_URL}/login`,{ email: credentials.email, password: credentials.password });
    return response.data;
}

export const signupAPI = async ( credentials: signupCredentials ) => {
    const response = await axios.post(`${BASE_API_URL}/register`, credentials )
    return response.data;
}

export const logoutAPI = async () => {
    const response = await axios.post(`${BASE_API_URL}/logout`);
    return response.data;
}