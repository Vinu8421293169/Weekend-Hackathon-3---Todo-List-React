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
    setText("");
  };

  const handleEdit = (id) => {
    const itemsCopy = [...items];
    itemsCopy.forEach((item) => {
      if (item.id === id) {
        item.edit = !item.edit;
        if (item.edit) setText(item.text);
        else setText("");
      }
    });
    setItems(itemsCopy);
  };

  const handleSave = (id) => {
    const itemsCopy = [...items];
    itemsCopy.forEach((item) => {
      if (item.id === id && text !== "") {
        item.text = text;
        item.edit = false;
        setText("");
      }
    });
    setItems(itemsCopy);
  };

  return (
    <div id="main">
      <input
        className="editTask"
        id="task"
        value={text}
        onChange={itemEvent}
      ></input>
      <button id="btn" onClick={addElement}>
        Add
      </button>
      <div id="task">
        {items.map((item, index) => {
          item.id = index;
          return (
            <div key={item.id + item.text} className="list">
              <div>{item.text}</div>
              <button className="edit" onClick={() => handleEdit(item.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
              {item.edit && (
                <button
                  className="saveTask"
                  onClick={() => handleSave(item.id)}
                >
                  Save
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
