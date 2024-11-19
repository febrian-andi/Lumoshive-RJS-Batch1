import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/todos/actions";

const TodoInput = ({ lang, theme, selectedTodo, onResetSelectedTodo }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
      setEdit(true);
      setEditId(selectedTodo.id);
    } else {
      resetForm();
    }
  }, [selectedTodo]);

  const resetForm = () => {
    setText("");
    setEdit(false);
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      dispatch(editTodo({ id: editId, text: text }));
    } else {
      dispatch(addTodo(text));
    }
    resetForm();
    onResetSelectedTodo();
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className={`form-control ${
            theme === "dark"
              ? "bg-dark text-white border-secondary"
              : "bg-light text-dark border-light"
          }`}
          placeholder={
            lang === "english" ? "Add new task..." : "Tambah tugas baru..."
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          className="btn btn-primary"
          type="submit"
        >
          {lang === "english"
            ? edit
              ? "Edit"
              : "Add"
            : edit
            ? "Edit"
            : "Tambah"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
