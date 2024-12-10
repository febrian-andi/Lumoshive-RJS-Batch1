import React from "react";
import Book from "../types/Book";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
  onDelete: (id: number | string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onDelete }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{book.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
      <p className="card-text">{book.description}</p>
      <button className="btn btn-sm btn-outline-danger me-3" onClick={() => onDelete(book.id)}>Delete</button>
      <Link to={`/edit/${book.id}`} className="btn btn-sm btn-outline-warning">Update</Link>
    </div>
  </div>
);

export default BookCard;