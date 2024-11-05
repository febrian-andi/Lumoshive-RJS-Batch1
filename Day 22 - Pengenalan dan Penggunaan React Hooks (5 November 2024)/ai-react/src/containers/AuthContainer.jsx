import React, { useState, useEffect } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";

const AuthContainer = ({ setToken }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, [setToken]);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const res = await login(form);
        setIsLogin(true);
        setError(null);
        setForm({ username: "", password: "" });
        localStorage.setItem("token", res.accessToken);
        setToken(res.accessToken);
      } else {
        await register(form);
        alert("Register success");
        setIsLogin(true);
        setError(null);
        setForm({ username: "", password: "" });
      }
    } catch (err) {
      setError(
        err.response.data.error ||
          (isLogin ? "Login Failed" : "Register Failed")
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LoginModal
        form={form}
        loading={loading}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLogin={isLogin}
        toggleLogin={toggleLogin}
      />
    </div>
  );
}

export default AuthContainer;
