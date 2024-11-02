import React from "react";

export default function StudentDetail({ toogleModalDetail, student }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header modal-header-detail">
          <h5 className="modal-title fw-bold">DETAIL STUDENT</h5>
          <button onClick={toogleModalDetail} type="button" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
              stroke="#FF5151FF"
              strokeWidth="2"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
        <div className="modal-body mx-auto">
          <ul>
            <li className="mb-2">
              <strong>NIM:</strong> {student.nim}
            </li>
            <li className="mb-2">
              <strong>Name:</strong> {student.name}
            </li>
            <li className="mb-2">
              <strong>Gender:</strong> {student.gender}
            </li>
            <li className="mb-2">
              <strong>Class:</strong> {student.class}
            </li>
            <li className="mb-2">
              <strong>Year:</strong> {student.year}
            </li>
            <li className="mb-2">
              <strong>Birth Date:</strong> {student.birthDate}
            </li>
            <li className="mb-2">
              <strong>Guardian Name:</strong> {student.guardian_name}
            </li>
            <li className="mb-2">
              <strong>Address:</strong> {student.address}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
