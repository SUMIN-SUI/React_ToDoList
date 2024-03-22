import React, { useState, useRef } from "react";
import { CiCircleMinus } from "react-icons/ci";
import "../style/TodoListItem.scss";

const TodoListItem = (props) => {
  const { todo, removeItem } = props;

  const [check, setCheck] = useState(false);
  const checkStyle = useRef();

  function checked() {
    const input = checkStyle.current;
    if (check) {
      setCheck(false);
      input.className = "";
    } else {
      setCheck(true);
      input.className = "checked";
    }
  }

  return (
    <div className="list-row">
      <div className="checkList">
        <input type="checkbox" name="" id="" onClick={checked} />
        <div ref={checkStyle}>{todo.text}</div>
      </div>
      <button onClick={() => removeItem(todo.id)}>
        <CiCircleMinus />
      </button>
    </div>
  );
};

export default TodoListItem;
