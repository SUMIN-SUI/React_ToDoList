import React from "react";
import TodoListItem from "./TodoListItem";
import "../style/TodoList.scss";

const TodoList = (props) => {
  const { todos, removeItem } = props;
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default TodoList;
