import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "./redux/slices/languageSlice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleChangeLanguage = (language) => {
    dispatch(changeLanguage(language));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4" cy-data="app-title">
                {language === "english" ? "To-Do List" : "Daftar Tugas"}
              </h1>
              <select
                className="form-select mb-3"
                value={language}
                onChange={(e) => handleChangeLanguage(e.target.value)}
              >
                <option value="english">English</option>
                <option value="indonesian">Indonesian</option>
              </select>
              <TodoInput />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
