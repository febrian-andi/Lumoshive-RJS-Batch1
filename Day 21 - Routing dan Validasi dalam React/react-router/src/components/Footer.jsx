import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 border-top border-secondary">
      <div className="d-flex justify-content-between align-items-center">
        <div>Copyright © 2024 | All rights reserved.</div>
        <div className="social-links">
          <a href="#">
            <i className="bi bi-github"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
