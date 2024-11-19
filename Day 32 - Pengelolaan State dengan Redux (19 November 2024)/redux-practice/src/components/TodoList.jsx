// src/components/TodoList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todos/actions";

const TodoList = ({ lang, theme, onSelectTodo }) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed
              ? "list-group-item-success" : theme === "dark"
              ? "bg-dark border-secondary text-white" : ""
          }`}
        >
          <span
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => onSelectTodo(todo)}
          >
            {todo.text}
          </span>
          <div>
            <button
              className={`btn btn-sm me-2 ${
                todo.completed
                  ? theme === "dark"
                    ? "btn-outline-dark"
                    : "btn-secondary"
                  : theme === "dark"
                  ? "btn-outline-success"
                  : "btn-success"
              }`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {lang === "english"
                ? todo.completed
                  ? "Unmark Done"
                  : "Mark Done"
                : todo.completed
                ? "Batalkan Selesai"
                : "Tandai Selesai"}
            </button>
            <button
              className={`btn btn-sm ${
                theme === "dark" ? "btn-outline-danger" : "btn-danger"
              }`}
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              {lang === "english" ? "Delete" : "Hapus"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
