import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, selectTodo } from "../redux/todos/actions";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selectedTodo = useSelector((state) => state.todo.selectedTodo);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTodo) {
      dispatch(editTodo({ id: selectedTodo.id, text })).then(() => {
        dispatch(selectTodo(null));
      });
    } else {
      dispatch(addTodo({ id: uuidv4(), text, completed: false })).then(() => {
        dispatch(selectTodo(null));
      });
    }
    setText("");
  };

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
    } else {
      setText("");
    }
    console.log(selectedTodo);
  }, [selectedTodo]);

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          value={text || ""}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          required
        />
        <button type="submit" className="btn btn-primary">
          {selectedTodo ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
