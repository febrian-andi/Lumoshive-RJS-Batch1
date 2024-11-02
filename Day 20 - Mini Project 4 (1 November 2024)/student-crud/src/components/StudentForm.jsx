import React from "react";

export default function StudentForm({
  toogleModalForm,
  student,
  onChange,
  formStudent,
  isEdit,
  error,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    formStudent();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div
          className={`modal-header ${
            isEdit ? "modal-header-update" : "modal-header-add"
          }`}
        >
          {isEdit ? (
            <h5 className="modal-title fw-bold">EDIT STUDENT</h5>
          ) : (
            <h5 className="modal-title fw-bold">ADD STUDENT</h5>
          )}
          <button
            onClick={toogleModalForm}
            type="button"
            className="btn"
            data-bs-dismiss="modal"
          >
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
        <div
          className={`modal-body ${
            isEdit ? "modal-body-update" : "modal-body-add"
          }`}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">NIM</label>
              <sup className="m-0" style={{ fontSize: "11px" }}>
                *must be numbers
              </sup>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                name="nim"
                value={student.nim}
                onChange={onChange}
                className="form-control neo-shadow"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">NAME</label>
              <input
                type="text"
                className="form-control neo-shadow"
                name="name"
                value={student.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">GENDER</label>
              <select
                className="form-select neo-shadow"
                name="gender"
                value={student.gender}
                onChange={onChange}
                required
              >
                <option value="" selected disabled>
                  SELECT GENDER
                </option>
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">BIRTH DATE</label>
              <input
                type="date"
                className="form-control neo-shadow"
                name="birthDate"
                value={student.birthDate}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">CLASS</label>
              <input
                type="text"
                className="form-control neo-shadow"
                name="class"
                value={student.class}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">YEAR</label>
              <sup className="m-0" style={{ fontSize: "11px" }}>
                *2000-2024
              </sup>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                name="year"
                value={student.year}
                onChange={onChange}
                className="form-control neo-shadow"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">GUARDIAN NAME</label>
              <input
                type="text"
                className="form-control neo-shadow"
                name="guardian_name"
                value={student.guardian_name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">ADDRESS</label>
              <sup className="m-0" style={{ fontSize: "11px" }}>
                *minimum 20 characters
              </sup>
              <textarea
                className="form-control neo-shadow"
                name="address"
                value={student.address}
                onChange={onChange}
                style={{ height: "100px" }}
                required
              ></textarea>
              <p className="text-muted text-end mt-1">
                {student.address.length} characters
              </p>
            </div>
            {Object.keys(error).length > 0 && (
              <div className="alert alert-danger p-2" role="alert">
                <ul>
                  {Object.entries(error).map(([key, value]) => (
                    <li key={key}>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="modal-footer">
              {isEdit ? (
                <button type="submit" className="neo-button update-btn">
                  UPDATE
                </button>
              ) : (
                <button type="submit" className="neo-button save-btn">
                  SAVE
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
