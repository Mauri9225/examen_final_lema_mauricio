const taskRepository = require("../config/repositories/taskRepository");

class TaskService {
  async getAll() {
    return taskRepository.findAll();
  }

  async getById(id) {
    const task = await taskRepository.findById(id);
    if (!task) {
      throw { status: 404, message: "Task not found" };
    }
    return task;
  }

  async create(data) {
    this.validateDone(data);
    return taskRepository.create(data);
  }

  async update(id, data) {
    const task = await this.getById(id);
    this.validateDone(data);
    return taskRepository.update(task, data);
  }

  async delete(id) {
    const task = await this.getById(id);
    await taskRepository.delete(task);
  }

  validateDone(data) {
    if (
      data.status === "DONE" &&
      (!data.description || data.description.length < 10)
    ) {
      throw {
        status: 400,
        message:
          "Description is required and must be at least 10 characters when status is DONE",
      };
    }
  }
}

module.exports = new TaskService();
