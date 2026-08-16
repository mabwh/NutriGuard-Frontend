import axiosInstance from "../utils/axiosInstance";

const cloneInstance = axios.create(axiosInstance.defaults);


export const postUserMessage = async (userMsgObj) => {
    const response = await axiosInstance.put("chat", userMsgObj);
    return response.data;
};