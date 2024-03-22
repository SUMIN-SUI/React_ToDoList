import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);

  const insertHandler = (item) => {
    const newTodo = {
      id: nextId.current,
      text: item,
      status: false,
    };

    setTodos([...todos, newTodo]);

    nextId.current += 1;
  };

  const removeHandler = (deleted) => {
    setTodos(todos.filter((prevTodo) => prevTodo.id !== deleted));
  };

  return (
    <>
      <TodoTemplate>
        <TodoInsert insertItem={insertHandler} />
        <TodoList todos={todos} removeItem={removeHandler} />
      </TodoTemplate>
    </>
  );
}

export default App;
