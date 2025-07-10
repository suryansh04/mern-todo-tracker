import React, { useState } from "react";
import "./styles/AddItem.css";
import axios from "./api/axios";
const AddItem = ({ onAdd }) => {
  const [taskName, settaskName] = useState("");

  const handleAddTask = async () => {
    if (!taskName.trim()) return;
    const task = { title: taskName, complete: false };
    try {
      const res = await axios.post("/tasks", task);
      onAdd(res.data.data.newTask);
      settaskName("");
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <div className="additem-container">
      <input
        type="text"
        required
        value={taskName}
        onChange={(e) => settaskName(e.target.value)}
        placeholder="Add Item"
        className="additem-input"
      />
      <button
        onClick={handleAddTask}
        className="button-primary"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
