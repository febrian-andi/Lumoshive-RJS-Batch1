import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useFormInput from "../hooks/useFormInput";
import { useLanguage } from "../contexts/LanguageContext";


export default function StudentSearch({ search, setSearch }) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { values, handleChange } = useFormInput({ name: search });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(values.name);
    const query = values.name ? `?find=${values.name}` : '';
    navigate(query);
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

StudentSearch.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};