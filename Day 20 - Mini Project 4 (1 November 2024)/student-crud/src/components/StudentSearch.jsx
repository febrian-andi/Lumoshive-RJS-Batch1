import React from "react";

export default function StudentSearch() {
  return (
    <div className="input-group">
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="SEARCH STUDENTS..."
      />
    </div>
  );
}
