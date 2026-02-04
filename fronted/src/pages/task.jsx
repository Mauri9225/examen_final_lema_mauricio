import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { getTasks, createTask } from '../services/taskService';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'PENDING'
  });

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleSubmit = async () => {
    try {
      const newTask = await createTask(form);
      setTasks([...tasks, newTask]);
      setError('');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Tasks</h1>

      <Input label="Title" onChange={e => setForm({...form, title: e.target.value})} />
      <Input label="Description" onChange={e => setForm({...form, description: e.target.value})} />

      <Button onClick={handleSubmit}>Crear</Button>

      {error && <p className="text-red-500">{error}</p>}

      <ul className="mt-4">
        {tasks.map(t => (
          <li key={t.id}>{t.title} - {t.status}</li>
        ))}
      </ul>
    </div>
  );
}
