import React, { useState } from "react";

function TodoApplication() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    "Leant Tailwind",
    "Learn React",
    "Learn Redux",
  ]);
  const handleAdd = () => {
    setTodos([...todos, task]);
    setTask("");
  };
  const handleNewTask = (e) => {
    setTask(e.target.value);
  };
  const handleDelete = (index) => {
    let newTodos = todos.filter((todo, idx) => {
      return idx !== index;
    });
    setTodos(newTodos);
  };
  return (
    <div className="todo-container">
      <h1>Todo Application</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Todo"
          value={task}
          onChange={handleNewTask}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="todos">
        {todos.map((todo, idx) => {
          return (
            <div key={idx} className="todo">
              <input type="checkbox" checked={todo.isDone} />
              <div>{todo}</div>
              <button
                onClick={() => {
                  handleDelete(idx);
                }}
              >
                Delete
              </button>
              <button>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoApplication;
