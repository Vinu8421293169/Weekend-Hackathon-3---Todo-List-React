import React from "react";

export default function ToDoList(props) {
  return (
    <div className="list">
      {props.text}
      <button id="btn">Edit</button>
      <button id="btn">Delete</button>
    </div>
  );
}
