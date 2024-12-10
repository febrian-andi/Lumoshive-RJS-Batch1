import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../types/Book";
import { useParams } from "react-router-dom";
import apiClient from "../utils/api";

interface BookFormProps {
  onSubmit: (book: Omit<Book, "id">) => void;
  onUpdate: (book: Book) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, onUpdate }) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      apiClient.get(`/books/${id}`)
      .then((response): void => {
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setDescription(book.description);
      })
      .catch((error): void => {
        console.error("Error fetching book:", error);
      });
    }
  }, [])

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (id) {
      onUpdate({
        id,
        title,
        author,
        description,
      })
    } else {
      onSubmit({
        title,
        author,
        description,
      });
    }
    
    setTitle("");
    setAuthor("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e): void => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e): void => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e): void => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="d-flex justify-content-start gap-2">
        <Link to="/" className="btn btn-outline-danger">
          Back
        </Link>
        <button type="submit" className={`btn ${id ? "btn-warning" : "btn-primary"}`}>
          <i className="bi bi-plus-square me-2"></i> {id ? "Update" : "Add"} Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;