import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import "../style/TodoInsert.scss";

const TodoInsert = ({ insertItem }) => {
  const [item, setItem] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (item.trim() === "") {
      return;
    }

    insertItem(item);

    setItem("");
  };

  return (
    <form className="inputBox" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={item}
        onChange={(event) => {
          setItem(event.target.value);
        }}
      />
      <button type="submit">
        <IoIosAddCircleOutline className="plusIcon" />
      </button>
    </form>
  );
};

export default TodoInsert;
