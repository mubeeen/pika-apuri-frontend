import { loginCredentials, signupCredentials, forgotPasswordCredentials, resetPasswordCredentials } from "../types";
import API from "./api";

export const loginAPI = async (credentials: loginCredentials) => {
  const response = await API.post(`/login`, { email: credentials.email, password: credentials.password });
  return response.data;
};

export const signupAPI = async (credentials: signupCredentials) => {
  const response = await API.post(`/signup`, credentials);
  return response.data;
};

export const logoutAPI = async () => {
  const response = await API.post(`/logout`);
  return response.data;
};

export const forgotPasswordApi = async (credentials: forgotPasswordCredentials) => {
  const response = await API.post(`/forgot-password`, credentials);
  return response.data;
};

export const resetPasswordApi = async (credentials: resetPasswordCredentials) => {
  const response = await API.post(`/reset-password`, credentials);
  return response.data;
};
