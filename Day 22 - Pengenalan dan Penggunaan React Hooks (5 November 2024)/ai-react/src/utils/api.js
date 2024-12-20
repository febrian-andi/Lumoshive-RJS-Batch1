import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "RSJ1-202408",
    },
  });
  return response.data;
};

export const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "RSJ1-202408",
    },
  });
  return response.data;
};

export const queryAI = async (data, token) => {
  const response = await axios.post(`${API_URL}/query`, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "RJS1-202408",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
