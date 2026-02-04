const taskRepository = require('../config/repositories/taskRepository');

class TaskService {

  validateDoneRule(data) {
    if (
      data.status === 'DONE' &&
      (!data.description || data.description.length < 10)
    ) {
      throw {
        status: 400,
        message: 'Description must be at least 10 characters to mark task as DONE'
      };
    }
  }

  async getAll() {
    return taskRepository.findAll();
  }

  async getById(id) {
    const task = await taskRepository.findById(id);
    if (!task) {
      throw { status: 404, message: 'Task not found' };
    }
    return task;
  }

  async create(data) {
    this.validateDoneRule(data);
    return taskRepository.create(data);
  }

  async update(id, data) {
    const task = await this.getById(id);
    this.validateDoneRule(data);
    return taskRepository.update(task, data);
  }

  async delete(id) {
    const task = await this.getById(id);
    return taskRepository.delete(task);
  }
}

module.exports = new TaskService();
