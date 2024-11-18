import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const authToken = localStorage.getItem('token');

const useDeleteData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (url, onSuccess) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_URL}${url}`, {
        headers: {
          authorization: `Bearer ${authToken}`,
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (onSuccess) onSuccess();
    } catch (error) {
      setError(error.message || 'Something went wrong');
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, error };
};

export default useDeleteData;
