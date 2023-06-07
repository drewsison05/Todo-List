import React, { useState } from "react";

function TodoList(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="fix">
      <li
        onClick={handleClick}
        style={{ textDecoration: isClicked ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <button
        onClick={() => {
          props.onCheck(props.id);
        }}
      ></button>
    </div>
  );
}

export default TodoList;
