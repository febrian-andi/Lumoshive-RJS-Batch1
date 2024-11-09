import React from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    toggleLanguage(e.target.value);
  };

  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <a className="navbar-brand" href="#">
            <i className="bi bi-mortarboard-fill me-2"></i>
            {language === "english" ? "STUDENT DATABASE" : "DATABASE SISWA"}
          </a>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between me-3">
              <div className="text-center">
                <i className="bi bi-brightness-high-fill text-warning fs-4"></i>
              </div>
              <div className="form-check form-switch d-flex align-items-center justify-content-center mx-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="themeSwitch"
                  checked={theme === "dark"}
                  onChange={handleThemeChange}
                />
              </div>
              <div className="text-center">
                <i className="bi bi-moon-stars-fill text-dark fs-4"></i>
              </div>
            </div>
            <div style={{ width: "65px" }}>
              <select
                className="form-select-language neo-button"
                aria-label="Language select"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="english">
                  Eng
                </option>
                <option value="indonesian">Indo</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
