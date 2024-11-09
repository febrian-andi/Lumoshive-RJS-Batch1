import React from "react";
import useFormInput from "../hooks/useFormInput";
import { useLanguage } from "../contexts/LanguageContext";


export default function StudentSearch() {
  const { language } = useLanguage();
  const { values, handleChange } = useFormInput({
    name: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(values.name);
  };

  return (
    <form onSubmit={handleSearch} className="input-group">
      <button type="submit" className="btn btn-search input-group-text">
        <i className="bi bi-search"></i>
      </button>
      <input
        type="text"
        className="form-control"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder={language === "english" ? "SEARCH BY NAME" : "CARI BERDASARKAN NAMA"}
      />
    </form>
  );
}
