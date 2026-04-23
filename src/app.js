app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});


app.get('/tasks', (req, res) => {
  res.json(tasks);
});