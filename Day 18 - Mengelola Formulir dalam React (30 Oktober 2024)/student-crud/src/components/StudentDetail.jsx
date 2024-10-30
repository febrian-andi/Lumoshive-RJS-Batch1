import React from "react";

export default function StudentDetail({ toogleModal, student }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Info Detail</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={toogleModal}
          ></button>
        </div>
        <div className="modal-body">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>NIM:</strong> {student.nim}</p>
          <p><strong>Birth Date:</strong> {student.birthDate}</p>
          <p><strong>Address:</strong> {student.address}</p>
          <p><strong>Guardian Name:</strong> {student.guardianName}</p>
        </div>
      </div>
    </div>
  );
}
