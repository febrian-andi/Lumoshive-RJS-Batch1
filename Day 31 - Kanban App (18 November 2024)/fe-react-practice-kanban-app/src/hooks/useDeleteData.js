import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_BASE_URL;

const useDeleteData = (url) => {
  const [loading, setLoading] = useState(false);

  const deleteData = (id, onSuccess) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await axios.delete(`${API_URL}${url}/${id}`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          if (onSuccess) onSuccess();
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the data. Please try again.",
            icon: "error",
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };

  return { deleteData, loading };
};

export default useDeleteData;