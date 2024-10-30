import React from "react";

export default function StudentForm({
  toogleModal,
  student,
  onChange,
  onSubmit,
  isEdit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            {isEdit ? "Edit Student" : "Add Student"}
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={toogleModal}
          ></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={student.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nim" className="form-label">
                NIM
              </label>
              <input
                type="text"
                inputMode="numeric"
                className="form-control"
                id="nim"
                name="nim"
                value={student.nim}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                Birth Date
              </label>
              <input
                type="date"
                className="form-control"
                id="birthDate"
                name="birthDate"
                value={student.birthDate}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={student.address}
                onChange={onChange}
                style={{
                    height: "100px"
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="guardianName" className="form-label">
                Guardian Name
              </label>
              <input
                type="text"
                className="form-control"
                id="guardianName"
                name="guardianName"
                value={student.guardianName}
                onChange={onChange}
                required
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                {isEdit ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
