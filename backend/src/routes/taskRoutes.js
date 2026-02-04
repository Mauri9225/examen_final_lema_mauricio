const express = require("express");
const router = express.Router();
const taskService = require("../services/taskService");

router.get("/", async (req, res) => {
  const tasks = await taskService.getAll();
  res.json(tasks);
});

router.get("/:id", async (req, res) => {
  try {
    const task = await taskService.getById(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const task = await taskService.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = await taskService.update(req.params.id, req.body);
    res.json(task);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await taskService.delete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

module.exports = router;
