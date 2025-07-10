import React, { useState } from "react";
import EditItem from "./EditItem";
import "./styles/TaskItem.css";
import { Pencil, Trash } from "lucide-react";
import axios from "./api/axios";
const TaskItem = ({ data, onDelete, onUpdate }) => {
  const [isEdit, setisEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(data.completed);

  function handleCheckboxChange(event) {
    const completed = event.target.checked;
    setIsChecked(completed);
    onUpdate(data._id, { completed });
  }

  if (isEdit)
    return <EditItem setisEdit={setisEdit} onUpdate={onUpdate} data={data} />;

  return (
    <div className="taskitem-container">
      <label className="taskitem-label">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
          className="taskitem-checkbox"
        />
        <span className={`taskitem-text ${isChecked ? "completed" : ""}`}>
          {data.title}
        </span>
      </label>
      <div className="taskitem-actions">
        <button className="taskitem-edit" onClick={() => setisEdit(true)}>
          <Pencil size={16} />
        </button>
        <button className="taskitem-delete" onClick={() => onDelete(data._id)}>
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
