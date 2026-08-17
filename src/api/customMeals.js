import axiosInstance from "../utils/axiosInstance";

// NEW CODE:
// Confirmed AI meals are persisted by the Backend and retrieved through its authenticated API.
export const getCustomMealsByDate = async (date) => {
  const response = await axiosInstance.get(`Tracking/custom-meals/date/${date}`);
  return response.data;
};
