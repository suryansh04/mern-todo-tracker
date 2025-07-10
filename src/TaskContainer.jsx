import React from "react";
import "./styles/TaskContainer.css";
import TaskItem from "./TaskItem";

const TaskContainer = ({ listData, onDelete, onEdit, onUpdate }) => {
  return (
    <div className="taskcontainer-wrapper">
      {listData.map((data, index) => (
        <TaskItem
          key={index}
          data={data}
          onDelete={onDelete}
          onEdit={onEdit}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
