import axios from '../axiosConfig';

const authService = {
  login: async (credentials) => {
    const response = await axios.post('/api/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await axios.post('/api/register', userData);
    return response.data;
  },

  logout: async () => {
    const response = await axios.post('/api/logout');
    return response.data;
  },
};

export default authService;
