import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const authToken = localStorage.getItem('token');

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}${url}`, {
        headers: {
          authorization: `Bearer ${authToken}`,
          'Access-Control-Allow-Origin': '*',
        },
      });
      setData(response.data.data);
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { fetchData, data, loading, error };
};

export default useFetchData;
