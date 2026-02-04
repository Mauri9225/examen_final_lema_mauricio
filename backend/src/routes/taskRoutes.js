const express = require('express');
const router = express.Router();
const taskService = require('../service/taskService');

router.get('/', async (req, res) => {
  res.json(await taskService.getAll());
});

router.get('/:id', async (req, res) => {
  try {
    res.json(await taskService.getById(req.params.id));
  } catch (e) {
    res.status(e.status).json({ message: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    res.status(201).json(await taskService.create(req.body));
  } catch (e) {
    res.status(e.status).json({ message: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    res.json(await taskService.update(req.params.id, req.body));
  } catch (e) {
    res.status(e.status).json({ message: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await taskService.delete(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    res.status(e.status).json({ message: e.message });
  }
});

module.exports = router;
