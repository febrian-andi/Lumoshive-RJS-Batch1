import React from "react";

export default function Navbar({ handleLogout }) {
  return (
    <nav className="navbar bg-primary border-bottom shadow px-0 px-md-5">
      <div className="container-fluid">
        <h1 className="navbar-brand text-white m-0">
          <i className="bi bi-robot me-1"></i>LumoshiveAI
        </h1>
        <button onClick={handleLogout} className="btn btn-danger">
          <i className="bi bi-box-arrow-right me-1"></i>
          Logout
        </button>
      </div>
    </nav>
  );
}
