import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const useAddData = (url) => {
  const [loading, setLoading] = useState(false);

  const addData = async (data, onSuccess) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}${url}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { addData, loading };
};

export default useAddData;
