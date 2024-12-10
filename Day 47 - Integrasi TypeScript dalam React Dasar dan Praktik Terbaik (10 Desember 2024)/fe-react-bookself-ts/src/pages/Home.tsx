import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import Book from "../types/Book";
import apiClient from "../utils/api";
import Swal from "sweetalert2";

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  })

  useEffect((): void => {
    getData();
  }, []);

  const getData = () => {
    apiClient.get("/books")
      .then((response): void => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  }

  const handleDelete = (id: number | string): void => {
    Swal.fire({
      title: "Do you want to delete this book?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        apiClient.delete(`/books/${id}`)
        .then(() => {
          getData();
          Toast.fire({
            icon: "success",
            title: "Deleted is succesfully!"
          })
        })
        .catch((error) => {
          console.error("Error deleting book:", error);
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="container mt-4">
      <h1>Bookshelf</h1>
      <BookList onDelete={handleDelete} books={books} />
    </div>
  );
};

export default Home;