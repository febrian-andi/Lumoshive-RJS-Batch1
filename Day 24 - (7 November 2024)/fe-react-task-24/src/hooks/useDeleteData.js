import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useDeleteData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = (url, onSuccess) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        setError(null);
        try {
          await axios.delete(url);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          if (onSuccess) onSuccess();
        } catch (error) {
          console.error(error);
          setError(error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the data.",
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
