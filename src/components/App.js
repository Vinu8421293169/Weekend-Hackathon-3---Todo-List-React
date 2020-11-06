import React, { useState } from "react";
import "./../styles/App.css";
import EditTask from "./editTask";
import TaskView from "./taskView";

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
      <EditTask
        text={text}
        itemEvent={itemEvent}
        addElement={addElement}
        id="task"
        className="saveTask"
      ></EditTask>
      {items.map((item, index) => (
        <TaskView
          key={index}
          item={item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSave={handleSave}
        ></TaskView>
      ))}
    </div>
  );
}

export default App;
