app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
  tasks[req.params.id] = req.body;
  res.json(tasks[req.params.id]);
});