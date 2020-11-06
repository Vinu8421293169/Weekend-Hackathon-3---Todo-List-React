import React from "react";

export default function TaskView({
  item,
  handleDelete,
  handleEdit,
  handleSave
}) {
  return (
    <>
      <div key={item.id + item.text} className="list">
        <div>{item.text}</div>
        <button className="edit" onClick={() => handleEdit(item.id)}>
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
        {item.edit && (
          <button className="saveTask" onClick={() => handleSave(item.id)}>
            Save
          </button>
        )}
      </div>
    </>
  );
}
