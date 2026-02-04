import { useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function TaskForm({ onSubmit, initialData, error }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'PENDING'
  });

  // 🔹 IMPORTANTE: manejar null correctamente
  useEffect(() => {
    if (initialData) {
      setTask({
        title: initialData.title || '',
        description: initialData.description || '',
        status: initialData.status || 'PENDING'
      });
    } else {
      setTask({
        title: '',
        description: '',
        status: 'PENDING'
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-3">
        {initialData ? 'Editar Task' : 'Nueva Task'}
      </h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <Input
        label="Title"
        name="title"
        value={task.title}
        onChange={handleChange}
      />

      <Input
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
      />

      <div className="mb-3">
        <label className="block mb-1 font-semibold">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="PENDING">PENDING</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>
      </div>

      <Button type="submit">
        {initialData ? 'Actualizar' : 'Crear'}
      </Button>
    </form>
  );
}
