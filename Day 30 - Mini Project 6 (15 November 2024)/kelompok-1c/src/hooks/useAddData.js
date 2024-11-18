import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const authToken = localStorage.getItem('token');

const useAddData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const addData = async (data, onSuccess) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${API_URL}${url}`, data, {
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
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return { addData, loading };
};

export default useAddData;
