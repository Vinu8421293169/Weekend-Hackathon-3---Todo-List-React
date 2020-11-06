import React from "react";

export default function EditTask({
  text,
  itemEvent,
  addElement,
  className,
  id
}) {
  return (
    <>
      <input
        className={className}
        id={id}
        value={text}
        onChange={itemEvent}
      ></input>
      <button id="btn" onClick={addElement}>
        Add
      </button>
    </>
  );
}
