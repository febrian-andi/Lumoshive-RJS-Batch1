import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const useUpdateData = (url) => {
  const [loading, setLoading] = useState(false);

  const updateData = async (id, data, onSuccess) => {
    try {
      setLoading(true);
      const response = await axios.put(`${API_URL}${url}/${id}`, data, {
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

  return { updateData, loading };
};

export default useUpdateData;