// OLD CODE - kept intentionally for safety.
// import axiosInstance from "../utils/axiosInstance";
//
// const AI_API_URL = "http://localhost:3000";
//
// export const sendMessageToAI = async (message, language = "en") => {
//     const response = await axiosInstance.post(
//         `${AI_API_URL}/api/v1/chat`,
//         {
//             message,
//             language,
//         },
//         {
//             skipAuthRefresh: true,
//         }
//     );
//
//     return response.data;
// };

import aiAxios from "../utils/aiAxios";

// NEW CODE:
// This uses the dedicated AI client so AI 401 responses can refresh Backend tokens safely.
export const sendMessageToAI = async (message, language = "en", context) => {
  const payload = {
    message,
    language,
  };

  // Send the AI-provided context exactly as received, only when one exists.
  if (context !== undefined && context !== null) {
    payload.context = context;
  }

  const response = await aiAxios.post("/api/v1/chat", payload);

  return response.data;
};
