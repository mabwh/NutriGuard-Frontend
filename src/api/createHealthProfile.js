import axiosInstance from "../utils/axiosInstance";

export const createHealthProfile = async (data) => {
    const response = await axiosInstance.post("HealthProfile", data);
    return response.data;
};

export const getHealthProfile = async () => {
    const response = await axiosInstance.get("HealthProfile");
    return response.data;
};

export const updateHealthProfile = async (newProfileObj) => {
    const response = await axiosInstance.put("HealthProfile", newProfileObj);
    return response.data;
};