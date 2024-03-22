import React from "react";
import "../style/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="todo_container">
      <h1>ToDoList</h1>
      {children}
    </div>
  );
};

export default TodoTemplate;
