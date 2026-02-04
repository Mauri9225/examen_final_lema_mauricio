const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = () => fetch(API_URL).then(r => r.json());

export const createTask = (data) =>
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(async r => {
    if (!r.ok) throw await r.json();
    return r.json();
  });
