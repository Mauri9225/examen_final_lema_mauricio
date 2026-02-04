const Task = require("../models/task");

class TaskRepository {
  findAll() {
    return Task.findAll();
  }

  findById(id) {
    return Task.findByPk(id);
  }

  create(data) {
    return Task.create(data);
  }

  update(task, data) {
    return task.update(data);
  }

  delete(task) {
    return task.destroy();
  }
}

module.exports = new TaskRepository();
