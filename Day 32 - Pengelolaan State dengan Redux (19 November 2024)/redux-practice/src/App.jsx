import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "./redux/language/actions";
import { changeTheme } from "./redux/theme/actions";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const lang = useSelector((state) => state.lang.lang);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = (e) => {
    dispatch(changeTheme(e.target.value));
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const [selectedTodo, setSelectedTodo] = useState(null);
  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
  };
  const handleResetSelectedTodo = () => {
    setSelectedTodo(null);
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ height: "100vh" }}
    >
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className={`card shadow ${
                theme === "dark" ? "bg-secondary text-white" : "bg-light"
              }`}
            >
              <div className="card-body">
                <h1 className="card-title text-center mb-4">
                  {lang === "english" ? "To-Do List" : "Daftar Tugas"}
                </h1>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <select
                      onChange={handleChangeTheme}
                      className={`form-select ${
                        theme === "dark"
                          ? "bg-dark text-white border-secondary"
                          : "bg-light text-dark border-light"
                      }`}
                    >
                      <option value="light">Theme: Light</option>
                      <option value="dark">Theme: Dark</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select
                      onChange={handleChangeLanguage}
                      className={`form-select ${
                        theme === "dark"
                          ? "bg-dark text-white border-secondary"
                          : "bg-light text-dark border-light"
                      }`}
                    >
                      <option value="english">Lang: English</option>
                      <option value="indonesian">Lang: Indonesian</option>
                    </select>
                  </div>
                </div>

                <TodoInput
                  lang={lang}
                  theme={theme}
                  selectedTodo={selectedTodo}
                  onResetSelectedTodo={handleResetSelectedTodo}
                />
                <TodoList
                  lang={lang}
                  theme={theme}
                  onSelectTodo={handleSelectTodo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
