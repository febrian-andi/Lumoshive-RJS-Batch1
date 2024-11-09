import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import PropTypes from "prop-types";

export default function StudentDetail({ student }) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  return (
      <div className="card neo-shadow mx-auto" style={{ maxWidth: "500px" }}>
        <div className="form-header form-header-detail d-flex align-items-center">
          <button className="btn p-0" onClick={goBack}>
            <i className="bi bi-arrow-bar-left fs-1 text-danger"></i>
          </button>
          <h5 className="fw-bold text-cente ms-2">{language === "english" ? "Student Detail" : "Detail Siswa"}</h5>
        </div>
        <div className="mx-auto p-3">
          <ul>
            <li className="mb-2">
              <strong>NIM:</strong> {student.nim}
            </li>
            <li className="mb-2">
              <strong>{language === "english" ? "Name" : "Nama"}:</strong> {student.name}
            </li>
            <li className="mb-2">
              <strong>{language === "english" ? "Gender" : "Jenis Kelamin"}:</strong> {student.gender}
            </li>
            <li className="mb-2">
              <strong>{language === "english" ? "Class" : "Kelas"}:</strong> {student.class}
            </li>
            <li className="mb-2">
              <strong>{language === "english" ? "Year" : "Tahun"}:</strong> {student.year}
            </li>
            <li className="mb-2">
              <strong>{language === "english" ? "Birth Date" : "Tanggal Lahir"}:</strong> {student.birthDate}
            </li>
            <li className="mb-2">
              <strong>{language === "english" ? "Guardian Name" : "Nama Wali"}:</strong> {student.guardian_name}
            </li>
            <li className="mb-2">
              <strong>{language === "english" ? "Address" : "Alamat"}:</strong> {student.address}
            </li>
          </ul>
        </div>
      </div>
  );
}

StudentDetail.propTypes = {
  student: PropTypes.object.isRequired,
};
