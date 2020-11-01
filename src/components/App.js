import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setText(event.target.value);
  };

  const addElement = () => {
    setItems((oldItems) => {
      return text === "" || text === " "
        ? [...oldItems]
        : [...oldItems, { text }];
    });
    setText("");
  };

  const handleDelete = (id) => {
    const itemsCopy = items.filter((el) => el.id !== id);
    setItems(itemsCopy);
  };

  const handleEdit = (id) => {
    const itemsCopy = items.filter((el) => el.id === id);
  };

  return (
    <div id="main">
      <input
        className="editTask"
        id="task"
        value={text}
        onChange={itemEvent}
      ></input>
      <button className="saveTask" id="btn" onClick={addElement}>
        Add
      </button>
      <div id="task">
        {items.map((el, index) => {
          el.id = index;
          return (
            <div className="list">
              {el.text}
              <button className="edit" onClick={() => handleEdit(el.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(el.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
