import React from "react";
import PropTypes from "prop-types";
import StudentSearch from "./StudentSearch";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function StudentHeader({ search, setSearch }) {
  const { language } = useLanguage();
  return (
    <div className="search-container neo-shadow">
      <div className="row align-items-center g-3">
        <div className="col-md-8">
          <StudentSearch search={search} setSearch={setSearch}/>
        </div>
        <div className="col-md-4 text-end">
          <Link to="/add-student">
            <button className="neo-button w-100 text-dark p-2">
              <i className="bi bi-plus-circle me-2"></i>
              {language === "english" ? "Add New Student" : "TAMBAH SISWA"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

StudentHeader.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};