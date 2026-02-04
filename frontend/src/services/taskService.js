const API_URL = '/api/tasks';

export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });

  if (!res.ok) {
    const err = await res.json();
    throw err;
  }

  return res.json();
};

export const updateTask = async (id, task) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });

  if (!res.ok) {
    const err = await res.json();
    throw err;
  }

  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
