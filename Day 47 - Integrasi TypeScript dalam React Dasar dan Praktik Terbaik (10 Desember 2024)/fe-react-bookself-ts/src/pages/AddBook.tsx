import React from "react";
import BookForm from "../components/BookForm";
import apiClient from "../utils/api";
import { useNavigate, useParams} from "react-router-dom";
import Book from "../types/Book";
import Swal from "sweetalert2";

const AddBook: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (book: Omit<Book, "id">): void => {
    apiClient.post("/books", book)
      .then(() => {
        navigate("/");
        Toast.fire({
          icon: "success",
          title: "Book Added is succesfully!"
        })
      })
      .catch(error => {
        console.error("Error adding book:", error);
      });
  };

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

  const handleUpdate = (book: Book): void => {
    console.log(book);
    apiClient.put(`/books/${book.id}`, book)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Book Updated is succesfully!"
        })
        navigate("/");
      })
      .catch(error => {
        console.error("Error updating book:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h1>{id ? "Update" : "Add"} a New Book</h1>
      <BookForm onSubmit={handleSubmit} onUpdate={handleUpdate} />
    </div>
  );
};

export default AddBook;