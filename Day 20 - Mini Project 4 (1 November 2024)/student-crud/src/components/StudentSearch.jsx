import React from "react";

export default function StudentSearch({ name, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <button type="submit" className="btn btn-search input-group-text">
        <i className="bi bi-search"></i>
      </button>
      <input
        type="text"
        className="form-control"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="SEARCH BY NAME..."
      />
    </form>
  );
}
