import React from "react";

export default function AddStudentButton({ toogleModalForm }) {
  return (
    <button
      onClick={toogleModalForm}
      className="neo-button w-100"
    >
      <i className="bi bi-plus-circle me-2"></i>ADD NEW STUDENT
    </button>
  );
}
