import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, currentTodo } from "../redux/slices/todosSlice";
// import { fetchTodos, deleteTodo, getTodoById, toggleTodo } from "../redux/async/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  // const { todos, loading, error, isSuccess } = useSelector((state) => state.todos);
  const { language } = useSelector((state) => state.language);

  const handleDeleteTodo = (id, e) => {
    dispatch(deleteTodo(id), e.stopPropagation());
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleCurrentTodo = (todo, e) => {
    dispatch(currentTodo(todo), e.stopPropagation());
    // dispatch(getTodoById(id), e.stopPropagation());
  };

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(fetchTodos());
  //   }
  // }, [isSuccess]);
  
  // if (loading) {
  //   return <div className="alert alert-secondary text-center">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="alert alert-danger text-center">Error</div>;
  // }

  // if (todos.length === 0) {
  //   return (
  //     <div className="alert alert-secondary text-center">No todos found.</div>
  //   );
  // }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-secondary" : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <div>
            <button
              cy-data="edit-button"
              onClick={(e) => handleCurrentTodo(todo, e)}
              className="btn btn-warning btn-sm me-2"
            >
              {language === "english" ? "Edit" : "Ubah"}
            </button>
            <button
              cy-data="delete-button"
              onClick={(e) => handleDeleteTodo(todo.id, e)}
              className="btn btn-danger btn-sm"
            >
              {language === "english" ? "Delete" : "Hapus"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
