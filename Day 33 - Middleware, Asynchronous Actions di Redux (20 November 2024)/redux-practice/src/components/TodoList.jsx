import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo, selectTodo, toggleTodo } from "../redux/todos/actions";

const TodoList = () => {
  const { todos, loading, error, isSuccess } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTodos());
    };
  }, [isSuccess]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSelectTodo = (id) => {
    dispatch(selectTodo(id));
  };

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodo(todo));
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  };

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  };

  if (todos.length === 0) {
    return <p className="text-center">No todos found.</p>;
  };

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <div>
            <button onClick={() => handleToggleTodo(todo)} className={`btn btn-sm me-2 ${todo.completed ? "btn-secondary" : "btn-success"}`}>
              {todo.completed ? "Unmark Done" : "Mark Done"}
            </button>
            <button onClick={() => handleSelectTodo(todo.id)} className="btn btn-warning btn-sm me-2">Edit</button>
            <button onClick={() => handleDelete(todo.id)} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
