import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-todo-tracker.onrender.com/api",
});

export default instance;
