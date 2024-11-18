
import instance from "../axiosConfig";

// Ambil URL API dasar dari environment variable
const API_URL = import.meta.env.VITE_BASE_URL;

// Fungsi untuk mengirimkan data kontak
const contactService = async (contactData) => {
  try {
    const response = await instance.post(`${API_URL}/api/contact`, contactData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export default contactService;
