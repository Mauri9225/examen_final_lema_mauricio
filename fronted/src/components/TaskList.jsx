import Button from './Button';

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-center">No hay tareas</p>;
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <div
          key={task.id}
          className="border bg-white p-3 rounded flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <span className="text-sm text-gray-500">{task.status}</span>
          </div>

          <div className="space-x-2">
            <Button onClick={() => onEdit(task)}>Editar</Button>
            <Button color="red" onClick={() => onDelete(task.id)}>
              Eliminar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
