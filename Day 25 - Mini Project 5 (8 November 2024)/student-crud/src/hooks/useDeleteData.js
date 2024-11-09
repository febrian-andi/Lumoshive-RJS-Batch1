import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLanguage } from "../contexts/LanguageContext";

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const useDeleteData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { language } = useLanguage();

  const messages = {
    english: {
      confirmTitle: "Are you sure?",
      confirmText: "You won't be able to revert this!",
      confirmButton: "Yes, delete it!",
      cancelButton: "Cancel",
      successTitle: "Deleted!",
      successText: "Your file has been deleted.",
      errorTitle: "Error!",
      errorText: "An error occurred while deleting the data. Please try again.",
    },
    indonesian: {
      confirmTitle: "Apakah Anda yakin?",
      confirmText: "Anda tidak akan dapat mengembalikan ini!",
      confirmButton: "Ya, hapus!",
      cancelButton: "Batal",
      successTitle: "Dihapus!",
      successText: "File Anda telah dihapus.",
      errorTitle: "Kesalahan!",
      errorText: "Terjadi kesalahan saat menghapus data. Silakan coba lagi.",
    },
  };

  const currentMessages = messages[language] || messages.english;

  const deleteData = (url, onSuccess) => {
    console.log("deleteData", url);
    Swal.fire({
      title: currentMessages.confirmTitle,
      text: currentMessages.confirmText,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: currentMessages.confirmButton,
      cancelButtonText: currentMessages.cancelButton,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        setError(null);
        try {
          await axios.delete(`${API_URL}${url}`, {
            headers: {
              "Content-Type": "application/json",
              "api-key": API_KEY,
            },
          });
          Swal.fire({
            title: currentMessages.successTitle,
            text: currentMessages.successText,
            icon: "success",
          });
          if (onSuccess) onSuccess();
        } catch (error) {
          setError(error);
          Swal.fire({
            title: currentMessages.errorTitle,
            text: currentMessages.errorText,
            icon: "error",
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };

  return { deleteData, loading, error };
};

export default useDeleteData;