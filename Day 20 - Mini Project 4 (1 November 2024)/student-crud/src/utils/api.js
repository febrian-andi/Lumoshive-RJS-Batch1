import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getAllData = async () => {
  const response = await axios.get(`${API_URL}/students`, {
    headers: {
      "Content-Type": "application/json",
      "api-key": API_KEY,
    },
  });
  return response.data;
};

export const addData = async (student) => {
  const response = await axios.post(`${API_URL}/students`, student, {
    headers: {
      "Content-Type": "application/json",
      "api-key": API_KEY,
    },
  });
  return response.data;
};

export const deleteData = async (id) => {
  const response = await axios.delete(`${API_URL}/students/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "api-key": API_KEY,
    },
  });
  return response.data;
};

export const updateData = async (id, student) => {
  const response = await axios.put(`${API_URL}/students/${id}`, student, {
    headers: {
      "Content-Type": "application/json",
      "api-key": API_KEY,
    },
  });
  return response.data;
};
