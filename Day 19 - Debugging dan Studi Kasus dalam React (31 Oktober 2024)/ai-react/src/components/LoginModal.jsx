import React from "react";

export default function LoginModal({
  isLogin,
  toogleLogin,
  form,
  handleChange,
  handleSubmit,
  loading,
  error,
}) {
  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{isLogin ? "Login" : "Register"}</h5>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger">
                <i className="bi bi-exclamation-triangle me-2"></i>
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  minLength="6"
                  maxLength="30"
                  disabled={loading}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <button
                className="btn btn-primary w-100 fw-bold"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm me-2"></span>
                ) : (
                  <>
                    <i className="bi bi-shield-lock me-1"></i>
                    {isLogin ? "Login" : "Register"}
                  </>
                )}
              </button>
              <button
                onClick={toogleLogin}
                className="btn btn-link w-100 mt-3 text-decoration-none"
                type="button"
                disabled={loading}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
