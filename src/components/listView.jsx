import React from "react";
import EditBox from "./editTask";

export default function ListView({
  task,
  edit,
  serial,
  handleDelete,
  handleEdit,
  handleEditChange,
  saveEditToDo,
  editItem
}) {
  return (
    <>
      <div className="list">
        {!edit ? (
          task
        ) : (
          <EditBox
            editItem={editItem}
            handleEditChange={handleEditChange}
            saveEditToDo={saveEditToDo}
          />
        )}
      </div>
      <button className="edit" style={{ margin: "5px" }} onClick={handleEdit}>
        Edit
      </button>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
