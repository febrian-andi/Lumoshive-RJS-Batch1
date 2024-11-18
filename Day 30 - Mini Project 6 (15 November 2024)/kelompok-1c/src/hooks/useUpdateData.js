import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const authToken = localStorage.getItem('token');

const useUpdateData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (data, onSuccess) => {
    try {
      setLoading(true);
      const response = await axios.put(`${API_URL}${url}`, data, {
        headers: {
          authorization: `Bearer ${authToken}`,
          'Access-Control-Allow-Origin': '*',
        },
      });
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return { updateData, loading };
};

export default useUpdateData;
