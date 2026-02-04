import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from './services/taskService';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState('');

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreateOrUpdate = async (task) => {
    try {
      setError('');

      if (editingTask) {
        await updateTask(editingTask.id, task);
        setEditingTask(null);
      } else {
        await createTask(task);
      }

      loadTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('¿Eliminar esta tarea?')) {
      await deleteTask(id);
      loadTasks();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Task Manager
        </h1>

        <TaskForm
          onSubmit={handleCreateOrUpdate}
          initialData={editingTask}
          error={error}
        />

        <hr className="my-6" />

        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
