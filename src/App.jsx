import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./Heading";
import AddItem from "./AddItem";
import TaskContainer from "./TaskContainer";
import axios from "./api/axios";

const App = () => {
  const [listData, setlistData] = useState([]);
  async function onUpdate(id, updatedData) {
    try {
      await axios.patch(`/tasks/${id}`, updatedData);
      setlistData((prev) =>
        prev.map((el) => (el._id === id ? { ...el, ...updatedData } : el))
      );
    } catch (err) {
      console.log("Error while updating", err);
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/tasks");
        setlistData(res.data.task);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function onAdd(item) {
    setlistData((prev) => [...prev, item]);
  }

  async function onDelete(id) {
    try {
      await axios.delete(`/tasks/${id}`);
      setlistData((prev) => prev.filter((el) => el._id !== id));
    } catch (err) {
      console.log("Err While handling delete", err);
    }
  }

  return (
    <div>
      <Heading>TODO LIST</Heading>
      <AddItem onAdd={onAdd} />
      <TaskContainer
        listData={listData}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default App;
