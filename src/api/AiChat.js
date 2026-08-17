import axiosInstance from "../utils/axiosInstance";

const AI_API_URL = "http://localhost:3000";

export const sendMessageToAI = async (message, language = "en") => {
    const response = await axiosInstance.post(
        `${AI_API_URL}/api/v1/chat`,
        {
            message,
            language,
        },
        {
            skipAuthRefresh: true,
        }
    );

    return response.data;
};
