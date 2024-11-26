// src/components/TodoInput.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todosSlice";
// import { addTodo, updateTodo } from "../redux/async/todosSlice";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { loading, currentTodo, isUpdate } = useSelector(
    (state) => state.todos
  );
  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    if (isUpdate) {
      setText(currentTodo.text);
    } else {
      setText("");
    }
  }, [isUpdate, currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      if (isUpdate) {
        dispatch(updateTodo({ ...currentTodo, text }));
      } else {
        dispatch(addTodo({ id: uuidv4(), text, completed: false }));
      }
    }
    setText("");
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          cy-data="input-form"
          className="form-control"
          placeholder="Add a new task..."
          required
          disabled={loading}
        />
        <button
          type="submit"
          cy-data="input-button"
          className={`btn ${isUpdate ? "btn-success" : "btn-primary"}`}
          disabled={loading}
        >
          {isUpdate
            ? language === "english"
              ? "Update"
              : "Perbarui"
            : language === "english"
            ? "Add"
            : "Tambah"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
