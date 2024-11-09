import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const useAddData = (url) => {
  const [loading, setLoading] = useState(false);

  const addData = async (data, onSuccess, onError) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}${url}`, data, {
        headers: {
          "Content-Type": "application/json",
          "api-key": API_KEY,
        },
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = {};
        error.response.data.data.forEach((err) => {
          errors[err.path] = err.msg;
        });
        onError(errors);
      } else {
        onError(error.message || "Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return { addData, loading };
};

export default useAddData;
