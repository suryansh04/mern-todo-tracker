const express = require("express");
const {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
} = require("./../controllers/taskController");

const router = express.Router();

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

module.exports = router;
