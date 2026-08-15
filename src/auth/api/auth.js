import axios from "axios";
const API_URL = "https://nutriguard.runasp.net/api/Auth/";

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response.data;
};
export const logout = async () => {
    const response = await axios.post(`${API_URL}logout`, {});
    return response.data;
};
export const signup = async (data) => {
    const response = await axios.post(`${API_URL}register`, data);
    return response.data;
};
export const forgetPassword = async (email)=>{
    const response = await axios.post(`${API_URL}forgot-password`,{email});
    return response.data;
};
export const verifyOtp = async (data)=>{
    const response = await axios.post(`${API_URL}verify-otp`,data);
    return response.data;
};
export const resetPassword = async (data) =>{
    const response = await axios.post(`${API_URL}reset-password`,data);
    return response.data;
};