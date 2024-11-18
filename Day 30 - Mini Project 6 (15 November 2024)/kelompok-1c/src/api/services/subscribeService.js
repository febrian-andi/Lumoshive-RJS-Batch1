import axios from '../axiosConfig';

const subscribeService = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found. Please log in.');
    throw new Error('No token found. Please log in.');
  }

  try {
    const response = await axios.get('/api/subscribe', {
      headers: {
        Authorization: `Bearer ${token}`, // Ambil token dari localStorage
      },
    });
    return response.data;
  } catch (error) {
    // Log detail error dari server
    console.error(
      'Error fetching contact messages:',
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || error.message);
  }
};

export default subscribeService;
