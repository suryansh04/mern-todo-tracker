import React, { useState } from "react";
import "./styles/EditItem.css";

const EditItem = ({ setisEdit, data, onUpdate }) => {
  const [editedTitle, seteditedTitle] = useState("");
  return (
    <div className="edit-popup-overlay">
      <div className="edit-popup-container">
        <h2>Edit Task</h2>
        <input
          type="text"
          className="edit-input"
          value={editedTitle}
          onChange={(e) => seteditedTitle(e.target.value)}
          placeholder="Update your task"
        />
        <div className="edit-popup-buttons">
          <button
            className="update-btn"
            onClick={() => {
              onUpdate(data._id, { title: editedTitle });
              setisEdit(false);
            }}
          >
            Update
          </button>
          <button className="cancel-btn" onClick={() => setisEdit(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
