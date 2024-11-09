import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormInput from "../hooks/useFormInput";
import useAddData from "../hooks/useAddData";
import useUpdateData from "../hooks/useUpdateData";
import { useLanguage } from "../contexts/LanguageContext";

export default function StudentForm({ isEdit, studentData = [] }) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [errorMessage, setErrorMessage] = useState({});

  const { values: student, handleChange } = useFormInput({
    nim: studentData.nim || "",
    name: studentData.name || "",
    gender: studentData.gender || "",
    birthDate: studentData.birthDate || "",
    class: studentData.class || "",
    address: studentData.address || "",
    year: studentData.year || "",
    guardian_name: studentData.guardian_name || "",
  });

  const {
    addData,
    loading: addLoading,
    error: addError,
  } = useAddData("/students");

  const {
    updateData,
    loading: updateLoading,
    error: updateError,
  } = useUpdateData(`/students/${studentData.id}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage({});

    const onSuccess = () => {
      navigate("/");
    };

    const onError = (error) => {
      setErrorMessage(error);
    };

    if (isEdit) {
      updateData(student, onSuccess, onError);
    } else {
      addData(student, onSuccess, onError);
    }
  };

  return (
    <div className="card neo-shadow mx-auto" style={{ maxWidth: "500px" }}>
      <div
        className={`form-header d-flex align-items-center ${
          isEdit ? "form-header-update" : "form-header-add"
        }`}
      >
        <button className="btn p-0" onClick={goBack}>
          <i className="bi bi-arrow-bar-left fs-1 text-danger"></i>
        </button>
        {isEdit ? (
          <h5 className="fw-bold text-cente ms-2">
            {language === "english" ? "EDIT STUDENT" : "UBAH SISWA"}</h5>
        ) : (
          <h5 className="fw-bold text-center ms-2">{language === "english" ? "ADD NEW STUDENT" : "TAMBAH SISWA"}</h5>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-3">
          <label className="form-label fw-bold">NIM</label>
          <sup className="m-0" style={{ fontSize: "11px" }}>
            {language === "english" ? "**must be numbers" : "*hanya angka"}
          </sup>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="nim"
            value={student.nim}
            onChange={handleChange}
            className="form-control neo-shadow"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">{language === "english" ? "NAME" : "NAMA"}</label>
          <input
            type="text"
            className="form-control neo-shadow"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">{language === "english" ? "GENDER" : "JENIS KELAMIN"}</label>
          <select
            className="form-select neo-shadow"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            required
          >
            <option value="" selected disabled>
              {language === "english" ? "SELECT GENDER" : "PILIH JENIS KELAMIN"}
            </option>
            <option value="male">{language === "english" ? "MALE" : "LAKI-LAKI" }</option>
            <option value="female">{language === "english" ? "FEMALE" : "PEREMPUAN" }</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">{language === "english" ? "BIRTH DATE" : "TANGGAL LAHIR"}</label>
          <input
            type="date"
            className="form-control neo-shadow"
            name="birthDate"
            value={student.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">{language === "english" ? "CLASS" : "KELAS"}</label>
          <input
            type="text"
            className="form-control neo-shadow"
            name="class"
            value={student.class}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">{language === "english" ? "YEAR" : "TAHUN"}</label>
          <sup className="m-0" style={{ fontSize: "11px" }}>
            *2000-2024
          </sup>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="year"
            value={student.year}
            onChange={handleChange}
            className="form-control neo-shadow"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">{language === "english" ? "GUARDIAN NAME" : "NAMA WALI"}</label>
          <input
            type="text"
            className="form-control neo-shadow"
            name="guardian_name"
            value={student.guardian_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">{language === "english" ? "ADDRESS" : "ALAMAT"}</label>
          <sup className="m-0" style={{ fontSize: "11px" }}>
            {language === "english" ? "*minimum 20 characters" : "*minimal 20 karakter"}
          </sup>
          <textarea
            className="form-control neo-shadow"
            name="address"
            value={student.address}
            onChange={handleChange}
            style={{ height: "100px" }}
            required
          ></textarea>
          <p className="text-muted text-end mt-1">
            {student.address.length} {language === "english" ? "characters" : "karakter"}
          </p>
        </div>
        {Object.keys(errorMessage).length > 0 && (
          <div className="alert alert-danger p-2" role="alert">
            <ul>
              {Object.entries(errorMessage).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="form-footer d-flex justify-content-end">
          <button
            onClick={goBack}
            type="button"
            className="neo-button btn-cancel me-3"
            disabled={updateLoading || addLoading}
          >
            {language === "english" ? "CANCEL" : "BATAL"}
          </button>
          {isEdit ? (
            <button
              type="submit"
              className="neo-button btn-update"
              disabled={updateLoading}
            >
              {language === "english" ? "UPDATE" : "PERBARUI"}
            </button>
          ) : (
            <button
              type="submit"
              className="neo-button btn-save"
              disabled={addLoading}
            >
              {language === "english" ? "SAVE" : "SIMPAN"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
